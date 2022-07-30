function bonusTime(salary, bonus) {
    if(bonus === true){
      salary = salary * 10
      return `£${salary}`
    } else if(bonus === false){
      return `£${salary}`
    }
    }