const jsOutputEl = document.querySelector('.hljs');
const skills = {
  javascript: 95,
  reactJS: 80,
  reactNative: 80,
  ui: 70,
  ux: 70,
  sencha: 70,
  meteorJS: 70,
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
animageSkill(95, '.js');
animageSkill(70, '.sencha');
animageSkill(70, '.meteor');
animageSkill(80, '.react');
animageSkill(80, '.react-native');
animageSkill(70, '.ui');
animageSkill(70, '.ux');
animageSkill(40, '.ror');
animageSkill(40, '.php');
