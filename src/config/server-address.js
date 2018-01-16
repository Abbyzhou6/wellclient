export default {
  'superCluster': {
    SDK: '192.168.40.234',
    cstaPort: ':30412',
    eventPort: ':30412',
    TPI: '192.168.40.234:30412/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true,
    logPrefix: '192.168.40.234:31043'
  },
  'CMB-PRO2': {
    SDK: 'prd2sdk.wellcloud.cc:5082',
    cstaPort: '',
    eventPort: '',
    TPI: 'prd2tpi.wellcloud.cc:5081/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true,
    logPrefix: 'prd2tpi.wellcloud.cc'
  },
  'CMB-PRO': {
    SDK: 'mbsdk.wellcloud.cc',
    cstaPort: ':5088',
    eventPort: ':5088',
    TPI: 'mbsdk.wellcloud.cc:5088/loginTrusted',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: true,
    logPrefix: 'mbsdk.wellcloud.cc:5088'
  },
  'CMB-PRO-443': {
    SDK: 'mbsdk.wellcloud.cc',
    cstaPort: '',
    eventPort: '',
    TPI: 'mbsdk.wellcloud.cc/login',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: true,
    logPrefix: 'mbsdk.wellcloud.cc:5088'
  },
  'CMB-TEST': {
    SDK: 'uatsdk.wellcloud.cc',
    cstaPort: '',
    eventPort: '',
    TPI: 'uatsdk.wellcloud.cc/loginTrusted',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: true,
    logPrefix: 'uattpi.wellcloud.cc'
  },
  'CMB-DEV': {
    SDK: 'uatsdk.wellcloud.cc',
    cstaPort: '',
    eventPort: '',
    TPI: 'uatsdk.wellcloud.cc/loginTrusted',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: true,
    logPrefix: 'uattpi.wellcloud.cc'
  },
  'CMB-UAT': {
    SDK: 'uatsdk.wellcloud.cc',
    cstaPort: '',
    eventPort: '',
    TPI: 'uatsdk.wellcloud.cc/loginTrusted',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: true,
    logPrefix: 'uattpi.wellcloud.cc'
  },
  'CMB-INNER': {
    SDK: '10.248.6.71',
    cstaPort: ':80',
    eventPort: ':80',
    TPI: '10.248.6.71/loginTrusted',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true,
    logPrefix: '10.248.6.71:8080'
  },
  'OUR-DEV': {
    SDK: '172.16.200.152',
    cstaPort: ':58080',
    eventPort: ':58080',
    TPI: '172.16.200.152:58080/login',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: true
  },
  'AWS-PRO': {
    SDK: 'tpisdk.wellcloud.cc',
    cstaPort: '',
    eventPort: '',
    TPI: 'tpi.wellcloud.cc/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: false,
    logPrefix: 'softphone1.wellcloud.cc:8088'
  },
  'AWS-HTTPS': {
    SDK: 'api.wellcloud.cc/sdk',
    cstaPort: '',
    eventPort: '',
    TPI: 'api.wellcloud.cc/agent/login',
    protocol: 'https://',
    wsProtocol: 'wss://',
    autoAnswer: false,
    logPrefix: 'api.wellcloud.cc'
  },
  'OUR-TEST': {
    SDK: '192.168.40.107',
    cstaPort: ':31024',
    eventPort: ':31024',
    TPI: '192.168.40.107:31024/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true,
    logPrefix: '192.168.40.107:31024'
  },
  'OUR-TEST-SDK': {
    SDK: '192.168.40.79',
    cstaPort: ':58080',
    eventPort: ':58080',
    TPI: '192.168.40.79:58080/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true,
    logPrefix: '192.168.40.107:31043'
  },
  'STRESS-TEST': {
    SDK: '192.168.40.141',
    cstaPort: ':31024',
    eventPort: ':31024',
    TPI: '192.168.40.141:31024/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true
  },
  'TIANAN': {
    SDK: '10.100.32.215',
    cstaPort: ':58080',
    eventPort: ':58080',
    TPI: '10.100.32.215:8090/login',
    protocol: 'http://',
    wsProtocol: 'ws://',
    autoAnswer: true,
    logPrefix: '10.100.32.215:31043'
  }
}
