export default function notExistedSample() {
  let name = 'Gin';

  console.log('notExisted Sample1:', typeof name, name);

  if (!name) {
    console.log('吾輩はねこである。名前はまだ' + name);
  } else {
    console.log('吾輩はねこである。名前は' + name);
  }
}
