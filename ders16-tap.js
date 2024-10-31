// ############################################# 1 ####################################
// Bele bir obyekt verilib
// Telebeler ve onlarin faizle aldigi qiymetler

const students = {
  Hasan: 95,
  Jamila: 75,
  Yasin: 62,
};

// Telebelere aldigi qiymetlere gore teqaudlerine elave verilir.
// Qiymet - >60 <=70 - 10 man, >70 <=85 - 35 man, > 85 - 50 man.
// studentBonus adli obyekt duzelt ve callback obj-den istifade etmekle elave bonuslari hesabla

// ############################################# 2 ####################################

// Qiymetlerden ibaret bele bir obyekt verilib.

const productPrice = {
  shampoo: 8,
  toothpaste: 3,
  butter: 20,
  cheese: 12,
};

// Qiymetleri asagidaki qaydada artirmaq lazimdir:
// Qiymet <=5 - qiymetler 10% artir, >5 <=10 7% artir, >10 <=15 5% artir, >15 3% artir.
// Yeni qiymetleri funksiya duzeltmekle ve callback obj-den istifade etmekle hesabla
// ve newProductPrice obyektine yaz.
// Son qiymetleri yazmaq lazimdir - mes 20 man olan olmalidir - 20.60
