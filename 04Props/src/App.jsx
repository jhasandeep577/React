import Card from "./components/Card";
function App() {
  return (
    <>
      <Card
        details="' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore hic nisi, veniam temporibus nam ea repellendus mollitia ullam cupiditate maiores. Iste beatae dolor sunt, fugit vitae tenetur ipsam architecto itaque sum dolor, sit amet consectetur adipisicing elit. '"
        username="sandeep"
        dob="24/02/2002"
        mobile={7868653727}
        address="sec-51, Noida"
        email="jhasandeep@gmail.com"
      />
      <Card
        details="' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore hic nisi, veniam temporibus nam ea repellendus mollitia ullam cupiditate maiores. Iste beatae dolor sunt, fugit vitae tenetur ipsam architecto itaque sum dolor, sit amet consectetur adipisicing elit. '"
        username="vivek"
        dob="01/01/1999"
        mobile={6768653727}
        address="sec-63, Noida"
        email="vivek@gmail.com"
      />
      <Card
        details="' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore hic nisi, veniam temporibus nam ea repellendus mollitia ullam cupiditate maiores. Iste beatae dolor sunt, fugit vitae tenetur ipsam architecto itaque sum dolor, sit amet consectetur adipisicing elit. '"
        username="Mansoor khan"
        dob="23/11/1999"
        mobile={8768653727}
        address="Shaheen Bagh , Delhi"
        email="khanmansoor@gmail.com"
      />
    </>
  );
}
export default App;
