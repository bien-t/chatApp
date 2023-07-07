import { ObjectId, Double } from 'mongodb';

const channels = [{
  _id: new ObjectId('64390a11f4b913dd9795c74b'),
  name: 'test1'
},
{
  _id: new ObjectId('643927cfabf54da620fd48ec'),
  name: 'test2',
  password: '$2a$10$sPo5TV8Rg7sNq5cH4ggbyOqZ/vo7cZ251/miNxOds5KmnatjDgfr.',
  protected: true
},
{
  _id: new ObjectId('643956a8badbc3971575c6d0'),
  name: 'test3'
},
{
  _id: new ObjectId('6441716a25729a23f796b599'),
  name: 'test4',
  password: ''
},
{
  _id: new ObjectId('644173cc14044e03d905ca4e'),
  name: 'test5',
  protected: true,
  password: '$2a$10$oxnyz5upwc40A3cIqvUsPuEPOq8mD4tB.cd1BMC4eW8rH4cTqwtb.'
},
{
  _id: new ObjectId('644173e614044e03d905ca4f'),
  name: 'test6',
  protected: false,
  password: '$2a$10$KsAIwt35O6sE4wXw./st1uWmIBwX1rCKxwYnD4n4knH3rqXYQcvzO'
}
];

const users = [{
  _id: new ObjectId('64188996c9a1ff44b197de37'),
  password: '$2a$10$y00Ay1/TSngW0OIk2KI/EOU.e3bZjcBCw531.E3iE1RKnAnC7ZA9q',
  email: 'kkk@kkk.pl',
  role: 'admin',
  activeChannel: '',
  previousChannel: '644173cc14044e03d905ca4e',
  authorizedChannels: [
    '6447836464ef1e168ee32b04',
    '644173cc14044e03d905ca4e'
  ],
  privateChats: [
    {
      userId: '642c2fd45d958356058353ee',
      privateChatId: '648b0d4a63976d427eb37253'
    },
    {
      userId: '6431160387d8cb4d14f6a19a',
      privateChatId: '648b0d8463976d427eb37254'
    },
    {
      userId: '648b29c9342c05c89107b44a',
      privateChatId: '648b29f5342c05c89107b44b'
    }
  ],
  username: 'kkk',
  avatarUrl: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png'
},
{
  _id: new ObjectId('642c2fd45d958356058353ee'),
  password: '$2a$10$ry3bP9XX9L3yHDw4nbRWsO7uCQbP.s2CYPiarMHZ8o6tXxcPxV.hK',
  email: 'fff@fff.com',
  privateChats: [
    {
      userId: '6431160387d8cb4d14f6a19a',
      privateChatId: '648b0d4563976d427eb37252'
    },
    {
      userId: '64188996c9a1ff44b197de37',
      privateChatId: '648b0d4a63976d427eb37253'
    },
    {
      userId: '648b29c9342c05c89107b44a',
      privateChatId: '648b2a6c342c05c89107b44d'
    }
  ],
  activeChannel: '64390a11f4b913dd9795c74b',
  previousChannel: '',
  username: 'fff',
  authorizedChannels: [
  ]
},
{
  _id: new ObjectId('642c2fff5d958356058353ef'),
  password: '$2a$10$sSNUvZVURt0mQZHV/bw6A.2njXWgpSp4CJSu2Hbygnfs20IsxjS8.',
  email: 'zzz@zzz.com',
  activeChannel: '64390a11f4b913dd9795c74b',
  username: 'zzz',
  authorizedChannels: [
  ],
  privateChats: []
},
{
  _id: new ObjectId('6431160387d8cb4d14f6a19a'),
  avatarUrl: '',
  email: 'jjj@jj.pl',
  password: '$2a$10$FDOzKb/drQJ.HZGoFvuoV.8t6J4F1xQCb5bGmYSQqpvGCXEiUQsnq',
  activeChannel: '',
  privateChats: [
    {
      userId: '642c2fd45d958356058353ee',
      privateChatId: '648b0d4563976d427eb37252'
    },
    {
      userId: '64188996c9a1ff44b197de37',
      privateChatId: '648b0d8463976d427eb37254'
    },
    {
      userId: '648b29c9342c05c89107b44a',
      privateChatId: '648b29f7342c05c89107b44c'
    }
  ],
  previousChannel: '643956a8badbc3971575c6d0',
  username: 'jjj',
  authorizedChannels: [
    '644173cc14044e03d905ca4e'
  ]
},
{
  _id: new ObjectId('648b29c9342c05c89107b44a'),
  authorizedChannels: [],
  role: 'user',
  privateChats: [
    {
      userId: '64188996c9a1ff44b197de37',
      privateChatId: '648b29f5342c05c89107b44b'
    },
    {
      userId: '6431160387d8cb4d14f6a19a',
      privateChatId: '648b29f7342c05c89107b44c'
    },
    {
      userId: '642c2fd45d958356058353ee',
      privateChatId: '648b2a6c342c05c89107b44d'
    }
  ],
  password: '$2a$10$fOinz7o9vU8Im9bd4YC/SODnjVe60ocPJylTG9/U3qoPH4lfGSz26',
  email: 'vvv@vvv.com',
  activeChannel: '64390a11f4b913dd9795c74b',
  previousChannel: '643956a8badbc3971575c6d0',
  username: 'vvv'
}];

const privateChats = [{
  _id: new ObjectId('648b0d4563976d427eb37252'),
  users: [
    '6431160387d8cb4d14f6a19a',
    '642c2fd45d958356058353ee'
  ]
},
{
  _id: new ObjectId('648b0d4a63976d427eb37253'),
  users: [
    '64188996c9a1ff44b197de37',
    '642c2fd45d958356058353ee'
  ]
},
{
  _id: new ObjectId('648b0d8463976d427eb37254'),
  users: [
    '64188996c9a1ff44b197de37',
    '6431160387d8cb4d14f6a19a'
  ]
},
{
  _id: new ObjectId('648b29f5342c05c89107b44b'),
  users: [
    '64188996c9a1ff44b197de37',
    '648b29c9342c05c89107b44a'
  ]
},
{
  _id: new ObjectId('648b29f7342c05c89107b44c'),
  users: [
    '6431160387d8cb4d14f6a19a',
    '648b29c9342c05c89107b44a'
  ]
},
{
  _id: new ObjectId('648b2a6c342c05c89107b44d'),
  users: [
    '642c2fd45d958356058353ee',
    '648b29c9342c05c89107b44a'
  ]
}];

const messages = [{
  _id: new ObjectId('643d1b1fd3455a40ba654ff7'),
  text: '123',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681726239169),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('643d1c740b92bb6307e75487'),
  text: '123',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1681726580264),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('643d1cd40b92bb6307e75488'),
  text: 'test',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681726676256),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('643d1ce80b92bb6307e75489'),
  text: '999',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681726696322),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('643d1cf10b92bb6307e7548a'),
  text: '888',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1681726705604),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('643d3d1f52a4a0a1a3164f68'),
  text: '456',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1681734943555),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('643d3d2a52a4a0a1a3164f69'),
  text: '555',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681734954317),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('643d443b52a4a0a1a3164f6a'),
  text: 'ppp',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1681736763680),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('643e90325b1c7fd824b2b6b0'),
  text: '123',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681821746563),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('643e911e378fbb6d415ca8ef'),
  text: '555',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681821982764),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('643e9226df9993d47da02414'),
  text: '8888',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681822246691),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('643e951fdf9993d47da02415'),
  text: 'ttt',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1681823007685),
  channelId: '643927cfabf54da620fd48ec'
},
{
  _id: new ObjectId('6441797414044e03d905ca50'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012532086),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441797614044e03d905ca51'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012534928),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441797814044e03d905ca52'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012536495),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441797914044e03d905ca53'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012537760),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441797a14044e03d905ca54'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012538903),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441797c14044e03d905ca55'),
  text: '2',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012540571),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441797d14044e03d905ca56'),
  text: '3',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012541770),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6441798c14044e03d905ca57'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012556244),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('644179d614044e03d905ca58'),
  text: '1',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682012630316),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('644780ab64ef1e168ee32b01'),
  text: '444',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1682407595359),
  channelId: '644173cc14044e03d905ca4e'
},
{
  _id: new ObjectId('648718a4be010a3618798ec1'),
  text: 'ddd',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686575268772),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6487190ebe010a3618798ec2'),
  text: 'sss',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686575374288),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('64871b39be010a3618798ec3'),
  text: '123',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686575929829),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('64871d05d59814d7a82edd05'),
  text: '333',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686576389157),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('64871e80d59814d7a82edd06'),
  text: '111',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686576768207),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6487204ad59814d7a82edd07'),
  text: '555',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686577226519),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('64872071d59814d7a82edd08'),
  text: '555',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686577265422),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6489c3e6d0558c78054da9d0'),
  text: '555',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686750182791),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6489cf402190f64150305e64'),
  text: '555',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686753088298),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6489d02e5f60250a6714ff85'),
  text: '333',
  private: false,
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686753326256),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6489e127a4c1a4fe0529090d'),
  text: '222',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686757671789),
  channelId: '648992ee87affef4bd84cb8a'
},
{
  _id: new ObjectId('6489e23a7e485c92d177134d'),
  text: '222',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686757946347),
  channelId: '648992ee87affef4bd84cb8a'
},
{
  _id: new ObjectId('648ad432b0c32b4d060c0e16'),
  text: '11',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686819890297),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648ad64e54fe429fdab20048'),
  text: '22',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686820430332),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648ad67754fe429fdab20049'),
  text: '11',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686820471744)
},
{
  _id: new ObjectId('648ad928b0d8b982752c9b1e'),
  text: '222',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821160811),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648ad972b0d8b982752c9b1f'),
  text: '444',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821234531),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648ad98db0d8b982752c9b20'),
  text: '555',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821261207),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648ada5abde1ddd5c78121e4'),
  text: '777',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821466188),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648ada8ebde1ddd5c78121e5'),
  text: '2',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821518086),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648adae1f1793b3b43f68445'),
  text: '1',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821601907),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648adb1eebeecce1eb797754'),
  text: '3',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821662305),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648adb821009f95462936c22'),
  text: '5',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821762271),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648adc189eb177475d7fc662'),
  text: '9',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821912452),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648adc67c84de4a3543a103c'),
  text: '8',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686821991472),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648adcb8a33d7d4ddf2f583a'),
  text: '7',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686822072675),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648add1a4eae34771fe72766'),
  text: '0',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686822170769),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648add314eae34771fe72767'),
  text: '0',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686822193878),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648ade081154a4bc4fc152b7'),
  text: '8',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686822408797),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648ade6ed4c240ff466e376d'),
  text: '2',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686822510312),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648ade92d4c240ff466e376e'),
  text: '3',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686822546215),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648ae5690ffcaa9c5381175a'),
  text: 'test',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686824297101)
},
{
  _id: new ObjectId('648ae6108585c101da0eadb4'),
  text: '55',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686824464699)
},
{
  _id: new ObjectId('648ae6418585c101da0eadb5'),
  text: 'ccc',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686824513182)
},
{
  _id: new ObjectId('648aef8c8585c101da0eadb6'),
  text: '888',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686826892450)
},
{
  _id: new ObjectId('648af3928585c101da0eadb7'),
  text: '333',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686827922306)
},
{
  _id: new ObjectId('648af3a58585c101da0eadb8'),
  text: '444',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686827941345),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648af78d8585c101da0eadba'),
  text: '888',
  privateChatId: '648af7898585c101da0eadb9',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686828941366)
},
{
  _id: new ObjectId('648af7b98585c101da0eadbb'),
  text: '99',
  privateChatId: '648af7898585c101da0eadb9',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686828985855)
},
{
  _id: new ObjectId('648af9abdc32ca89ddd2a356'),
  text: '777',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686829483140)
},
{
  _id: new ObjectId('648af9f0dc32ca89ddd2a357'),
  text: '999',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686829552809)
},
{
  _id: new ObjectId('648afa01dc32ca89ddd2a358'),
  text: '444',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686829569092),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648afa41dc32ca89ddd2a359'),
  text: '123',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686829633259)
},
{
  _id: new ObjectId('648afa9adc32ca89ddd2a35b'),
  text: 'sss',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686829722708)
},
{
  _id: new ObjectId('648afadcdc32ca89ddd2a35c'),
  text: 'test',
  privateChatId: '648af7898585c101da0eadb9',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686829788968)
},
{
  _id: new ObjectId('648afba9dc32ca89ddd2a35e'),
  text: 'mmmmmm',
  privateChatId: '648af7898585c101da0eadb9',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686829993056)
},
{
  _id: new ObjectId('648afd64dc32ca89ddd2a35f'),
  text: 'mmmmmmmmmm',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686830436793)
},
{
  _id: new ObjectId('648afd96dc32ca89ddd2a360'),
  text: 'cc',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686830486246),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648afdfbdc32ca89ddd2a361'),
  text: 'kkk',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686830587639)
},
{
  _id: new ObjectId('648afe58dc32ca89ddd2a362'),
  text: 'ppp',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686830680884)
},
{
  _id: new ObjectId('648afe77dc32ca89ddd2a363'),
  text: 'ss',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686830711896)
},
{
  _id: new ObjectId('648afe9ddc32ca89ddd2a364'),
  text: 'ss',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686830749455)
},
{
  _id: new ObjectId('648b00d3dc32ca89ddd2a365'),
  text: 'lllll',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686831315885)
},
{
  _id: new ObjectId('648b04167a4ad7e9eef7ba30'),
  text: '555',
  privateChatId: '648992ee87affef4bd84cb8a',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686832150613)
},
{
  _id: new ObjectId('648b0dca63976d427eb37255'),
  text: 'lll',
  privateChatId: '648b0d4563976d427eb37252',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686834634197)
},
{
  _id: new ObjectId('648b143c63976d427eb37256'),
  text: 'ppp',
  privateChatId: '648b0d4563976d427eb37252',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686836284889)
},
{
  _id: new ObjectId('648b1562803141c99c7d188b'),
  text: 'nnnnn',
  privateChatId: '648b0d4563976d427eb37252',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686836578323)
},
{
  _id: new ObjectId('648b157d803141c99c7d188c'),
  text: 'pppp',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686836605564)
},
{
  _id: new ObjectId('648b159e803141c99c7d188d'),
  text: 'bbbb',
  privateChatId: '648b0d4a63976d427eb37253',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686836638661)
},
{
  _id: new ObjectId('648b15c9803141c99c7d188e'),
  text: 'pp',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686836681703),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b162f803141c99c7d188f'),
  text: 'vvvvvvvvvvvvvv',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686836783827),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b16cbb49f41e38e774d0e'),
  text: 'bbb',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686836939623),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b1708b49f41e38e774d0f'),
  text: 'mm',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686837000325),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b1729b49f41e38e774d10'),
  text: 'nn',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686837033409),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b1772b49f41e38e774d11'),
  text: 'll',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686837106264),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b177db49f41e38e774d12'),
  text: 'dd',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686837117980)
},
{
  _id: new ObjectId('648b1783b49f41e38e774d13'),
  text: 'vvv',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686837123739),
  channelId: '643956a8badbc3971575c6d0'
},
{
  _id: new ObjectId('648b2a73342c05c89107b44e'),
  text: '555',
  privateChatId: '648b2a6c342c05c89107b44d',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686841971636)
},
{
  _id: new ObjectId('648b2ab9342c05c89107b44f'),
  text: 'hhh',
  privateChatId: '648b2a6c342c05c89107b44d',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686842041711)
},
{
  _id: new ObjectId('648b2ac0342c05c89107b450'),
  text: 'ppp',
  privateChatId: '648b2a6c342c05c89107b44d',
  userId: new ObjectId('642c2fd45d958356058353ee'),
  createdAt: new Double(1686842048908)
},
{
  _id: new ObjectId('648b2faa342c05c89107b451'),
  text: 'uuu',
  privateChatId: '648b29f5342c05c89107b44b',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686843306338)
},
{
  _id: new ObjectId('648b3032342c05c89107b452'),
  text: 'teeest',
  privateChatId: '648b29f7342c05c89107b44c',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686843442276)
},
{
  _id: new ObjectId('648b3092342c05c89107b453'),
  text: 'ppp',
  privateChatId: '648b29f7342c05c89107b44c',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686843538770)
},
{
  _id: new ObjectId('648b30d5342c05c89107b454'),
  text: 'iii',
  privateChatId: '648b29f5342c05c89107b44b',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686843605438)
},
{
  _id: new ObjectId('648b30ed342c05c89107b455'),
  text: 'uuuuuuu',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686843629119)
},
{
  _id: new ObjectId('648b344a342c05c89107b456'),
  text: 'mm',
  privateChatId: '648b29f7342c05c89107b44c',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686844490786)
},
{
  _id: new ObjectId('648b34b0342c05c89107b457'),
  text: 'ccc',
  privateChatId: '648b29f7342c05c89107b44c',
  userId: new ObjectId('648b29c9342c05c89107b44a'),
  createdAt: new Double(1686844592914)
},
{
  _id: new ObjectId('648c4c02cdc8e81beef5bc21'),
  text: 'pp',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686916098772)
},
{
  _id: new ObjectId('648c4c1ecdc8e81beef5bc22'),
  text: 'ss',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686916126773)
},
{
  _id: new ObjectId('648c4ec0c4c237b17b47fceb'),
  text: 'xxx',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686916800103)
},
{
  _id: new ObjectId('648c4ee6c4c237b17b47fcec'),
  text: 'ppp',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686916838518)
},
{
  _id: new ObjectId('648c4ef8c4c237b17b47fced'),
  text: 'vvv',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686916856146)
},
{
  _id: new ObjectId('648c4f49c4c237b17b47fcee'),
  text: 'bbb',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686916937023)
},
{
  _id: new ObjectId('648c4fadc4c237b17b47fcef'),
  text: 'mmm',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686917037825)
},
{
  _id: new ObjectId('648c4fbfc4c237b17b47fcf0'),
  text: 'llll',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686917055256)
},
{
  _id: new ObjectId('648c50b0c4c237b17b47fcf1'),
  text: 'nnnnnnn',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686917296416)
},
{
  _id: new ObjectId('648c50bac4c237b17b47fcf2'),
  text: 'mmmm',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686917306369)
},
{
  _id: new ObjectId('648c50c2c4c237b17b47fcf3'),
  text: 'cvcvcvvc',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1686917314046)
},
{
  _id: new ObjectId('648c7c006d017cfbd4d93064'),
  text: 'bbbbbbbbbbbbbbbbbbbbbbbbb',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686928384798),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('648c7c096d017cfbd4d93065'),
  text: 'bbbbbbbbbb bbbbbbbbb bbbbbbbbb',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1686928393258),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6494580e57d489182abbebfa'),
  text: 'pp',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687443470767),
  channelId: '64390a11f4b913dd9795c74b'
},

{
  _id: new ObjectId('6495b85fc899bf27b726a123'),
  text: 'sss',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687533663338),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649982b10f85b86d697d05b4'),
  text: 's',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687782065848),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('6499ad098fc75625e849c71c'),
  text: 'sss',
  privateChatId: '648b0d4a63976d427eb37253',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687792905633)
},
{
  _id: new ObjectId('6499ad0d8fc75625e849c71d'),
  text: 'ppp',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687792909072)
},
{
  _id: new ObjectId('649ab3dd3526fccef057f878'),
  text: 'test',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687860189235),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649ab5e3abfd6fd968d60b50'),
  text: '555',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687860707924),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649ab859ef009e98a6913741'),
  text: '123',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687861337594),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649ab8baef009e98a6913742'),
  text: '222',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687861434870),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649aba73ef009e98a6913743'),
  text: '333',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687861875727),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649abc05ef009e98a6913744'),
  text: 'ppp',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687862277219),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649abc69ef009e98a6913745'),
  text: '333',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687862377088),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649abc80ef009e98a6913746'),
  text: '444',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687862400236),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649abcccef009e98a6913747'),
  text: 'bbb',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687862476021),
  channelId: '64390a11f4b913dd9795c74b'
},
{
  _id: new ObjectId('649abde3ef009e98a6913748'),
  text: 'bbb',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687862755172)
},
{
  _id: new ObjectId('649abdf7ef009e98a6913749'),
  text: 'p',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687862775426)
},
{
  _id: new ObjectId('649abe15ef009e98a691374a'),
  text: 'c',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687862805719)
},
{
  _id: new ObjectId('649abe1def009e98a691374b'),
  text: 'cc',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687862813093)
},
{
  _id: new ObjectId('649abe55ef009e98a691374c'),
  text: 's',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687862869666)
},
{
  _id: new ObjectId('649abea7ef009e98a691374d'),
  text: 'bb',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687862951561)
},
{
  _id: new ObjectId('649ac032d51e838504cc79b9'),
  text: 'bbb',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687863346425)
},
{
  _id: new ObjectId('649ac139c89d7f84cd9fa2eb'),
  text: 'kkk',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687863609249)
},
{
  _id: new ObjectId('649ac141c89d7f84cd9fa2ec'),
  text: 'cc',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687863617067)
},
{
  _id: new ObjectId('649ac1b1c89d7f84cd9fa2ed'),
  text: 'ccc',
  privateChatId: '648b0d8463976d427eb37254',
  userId: new ObjectId('64188996c9a1ff44b197de37'),
  createdAt: new Double(1687863729879)
},
{
  _id: new ObjectId('649bf70081ed7c22d5cc3ad6'),
  text: 'vvv',
  userId: new ObjectId('6431160387d8cb4d14f6a19a'),
  createdAt: new Double(1687942912256),
  channelId: '64390a11f4b913dd9795c74b'
}];

export {
  channels,
  messages,
  privateChats,
  users
};
