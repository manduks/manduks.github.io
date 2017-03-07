const jsOutputEl = document.querySelector('.hljs');
const skills = {
  javascript: 90,
  sencha: 80,
  meteorJS: 80,
  reactJS: 70,
  reactNative: 70,
  ui: 50,
  ux: 50,
  ror: 40,
  php: 40
};
const animageSkill = function animageSkill(level, selector) {
  const obj = {
    value: '0%'
  };
  anime({
    targets: obj,
    value: level,
    round: 1,
    easing: 'linear',
    update: function() {
      var el = document.querySelector(selector);
      el.innerHTML = `'${obj.value}'`;
    }
  });
};
animageSkill(90, '.js');
animageSkill(80, '.sencha');
animageSkill(80, '.meteor');
animageSkill(70, '.react');
animageSkill(60, '.react-native');
animageSkill(50, '.ui');
animageSkill(50, '.ux');
animageSkill(40, '.ror');
animageSkill(40, '.php');
