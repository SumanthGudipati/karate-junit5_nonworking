function fn(){
var env = karate.env; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  var config = { // base config JSON
  weburl:'https://wwww.google.com'
  };
  if (env == 'stage') {
    config.weburl = 'https://stage.google.com';
  } else if (env == 'uat') {
    config.weburl = 'https://uat.google.com';
  }

  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);

  return config;

}
