/* global localStorage, alert, $, wellClient */
(function () {
  if (typeof window.localStorage === 'object') {
    $('#well-code').val(localStorage.getItem('code') || '')
    $('#well-password').val(localStorage.getItem('password') || '')
    $('#well-namespace').val(localStorage.getItem('namespace') || '')
    $('#well-deviceId').val(localStorage.getItem('deviceId') || '')
  }

  wellClient.setConfig({useErrorAlert: true, autoAnswer: true})
  wellClient.useConfig('AWS-HTTPS')
})()

$('#test-makeCall').click(function () {
  var phone = $('#test-deviceId').val()
  var option = {
    originForDisplay: $('#test-originForDisplay').val(),
    destForDisplay: $('#test-destForDisplay').val()
  }

  if ($('#test-opa')[0].checked) {
    option.opa = '1'
  }

  if (/^[0-9-wW]{3,20}$/.test(phone)) {
    wellClient.makeCall(phone, option)
  } else {
    alert('手机号格式不对')
  }
})

$('#login').click(function () {
  var $login = $('#login')

  var code = $('#code').val()
  var password = $('#password').val()
  var namespace = $('#namespace').val()
  var deviceId = $('#deviceId').val()

  if (!code || !password || !namespace || !deviceId) {
    alert('工号，密码，域名，分机号都是必填项')
    return
  }

  $login.attr('disabled', 'disabled')

  wellClient.login(code, password, namespace, deviceId)
    .done(function (res) {
      if (!window.localStorage) {
        return
      }
      localStorage.setItem('code', code)
      localStorage.setItem('password', password)
      localStorage.setItem('password', password)
      localStorage.setItem('namespace', namespace)
      localStorage.setItem('deviceId', deviceId)
    })
    .always(function () {
      $login.removeAttr('disabled')
    })

  $('#tip').text('')
})

$('#config').click(function () {
  var env = $('#config-env').val()

  wellClient.useConfig(env)
  $('#tip').text('配置成功')

  setTimeout(function () {
    $('#tip').text('')
  }, 2000)
})

wellClient.innerOn('connectionCleared', function (res) {
  console.log(res)
})

wellClient.innerOn('loginFailed', function (res) {
  console.log(res)
})

wellClient.innerOn('wsDisconnected', function (res) {
  console.log(res)
})

wellClient.exports = function (event) {
  // 呼入时，显示随路数据
  if (event.eventName === 'delivered' && event.userData && event.eventSrc === event.calledDevice) {
    logToPannel(event.userData)
  } else if (event.eventName === 'agentWorkingAfterCall') {
    // acw时，设置座席状态为就绪
    wellClient.setAgentMode('Ready')
  }
}

function logToPannel (log) {
  var msg = JSON.stringify(log)
  msg = new Date().toLocaleString() + '   ' + msg
  msg = '<p>' + msg + '</p>'
  $('#log').prepend(msg)
}

function clearPageLog () {
  $('#log').empty()
}
