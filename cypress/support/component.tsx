// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import {
  useEffect, type ReactNode
} from 'react';
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18';
import { userAtom } from '@/components/Layout';
import { useAtom } from 'jotai';
import data from '@/cypress/fixtures/data.json';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: ReactNode,
        options?: MountOptions & { loggedIn?: boolean, admin?: boolean }
      ): Cypress.Chainable<MountReturn>
    }
    interface ResolvedConfigOptions {
      hideXHRInCommandLog?: boolean;
    }
  }
}

const State = ({ children, admin }: { children: ReactNode, admin: boolean }) => {
  const [, setUser] = useAtom(userAtom);
  useEffect(() => {
    if (admin) {
      setUser({
        email: data.adminData.email, role: data.adminData.role as 'user', _id: data.adminData._id, avatarUrl: data.adminData.avatarUrl, authorizedChannels: data.adminData.authorizedChannels
      });
    } else {
      setUser({
        email: data.userData.email, role: data.userData.role as 'admin', _id: data.userData._id, avatarUrl: data.userData.avatarUrl, authorizedChannels: data.userData.authorizedChannels
      });
    }
  }, [setUser, admin]);
  return (
    <>
      {children}
    </>
  );
};
Cypress.Commands.add('mount', (component, options = {}) => {
  let wrapped;
  const { loggedIn, admin, ...mountOptions } = options;
  if (loggedIn) {
    wrapped = <State admin={admin}>{component}</State>;
  } else {
    wrapped = component;
  }

  return mount(wrapped, mountOptions);
});

if (Cypress.config('hideXHRInCommandLog')) {
  const app = window.top;

  if (
    app
    && !app.document.head.querySelector('[data-hide-command-log-request]')
  ) {
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
  }
}
