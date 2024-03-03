// 定数を宣言する
const today = new Date;

// 関数todayDateを定義する
const todayDate = () => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

console.log(year + '年' + month + '月' + date + '日');
}

// 関数todayDateを呼び出す
todayDate();