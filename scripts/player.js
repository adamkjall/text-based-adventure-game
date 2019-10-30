const Player = name => {
  let hp = 100;
  let mp = 100;
  let level = 1;
  const getName = () => name;
  const getHP = () => hp;
  const getMP = () => mp;
  const getLevel = () => level;
  const levelUp = () => level += 1;

  const takeDamage = damage => {
    if (hp - damage < 0) hp = 0;
    else hp -= damage;
  };

  const useMana = manaToUse => {
    if (mp - manaToUse >= 0) {
      mp -= manaToUse;
      return true; // mana was sucessfully used
    } else {
      return false; // not enough
    }
  };

  return { takeDamage, useMana, getName, getHP, getMP, getLevel, levelUp };
};

export default Player;
