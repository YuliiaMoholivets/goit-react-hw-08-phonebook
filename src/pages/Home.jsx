const styles = {
  container: {
    display: 'block',
    margin: "0 auto",
    width: 600, 
    textAlign:'right',
  },

  title: {
    width: 600,
    fontWeight: 700,
    fontSize: 32,
    textAlign: 'center',
    marginTop: '300px',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello, this is your PhoneBook. It is designed to help your brain not remember numbers, but write them down. Create your own unique account and get the opportunity to record your contacts.</h1>
    </div>
  );
};

export default Home;