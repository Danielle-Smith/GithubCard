const testData = [
    {"name": "Danielle Smith",
    "avatar_url": "https://avatars.githubusercontent.com/u/57499759?v=4",
    "company": "none"},
    {"name": "Sophie Alpert",
    "avatar_url": "https://avatars.githubusercontent.com/u/7293315?v=4",
    "company": "Facebook"},
  ];
  
  class Card extends React.Component {
    render() {
      const profile = this.props;
      return (
        <div className="github-profile">
          <img src={profile.avatar_url} />
          <div className="info">
            <div className="name">{profile.name}</div>
              <div className="company">{profile.company}</div>
          </div>
        </div>
      );
    }
  }
  
  class Form extends React.Component {
    userNameInput = React.createRef();
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.userNameInput.current.value)
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Github username" ref={this.userNameInput} required />
            <button>Add card</button>
        </form>
      );
    }
  }
  
  const CardList = (props) => (
    <div>
      {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
  );
  
  class App extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     profiles:testData,
    //   };
    // } 
    //   instead of that you can just use this new syntax
    state = {
      profiles: testData,
    };
    
    render() {
      return (
        <div>
          <div className="header">{this.props.title}</div>
          <Form />
          <CardList profiles={this.state.profiles} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
      <App title="The GitHub Cards App" />,
    mountNode,
  );