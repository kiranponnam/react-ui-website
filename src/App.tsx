import * as React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/NavBar/navbar";
import { ScrollBottomToTop } from "./components/ScrollTop/scrollBottomTop";
import { Checkbox } from "@material-ui/core";
const About = lazy(() => import("./components/AboutUs/about"));
const Contactus = lazy(() => import("./components/ContactUs/contactus"));
const Home = lazy(() => import("./components/Home/home"));
const WorkCollection = lazy(() => import("./components/Work/workCollection"));
function App(props: any) {
  const userData = [
    {
      id:1,
      title: "hi hahhahah",
      summary: "summary of teajajjaj"},
    {
      id:2,
      title: "hi hahhahahfsa",
      summary: "summary of teajajjaj",},
    {
      id:3,
       title: "hi hahhahahrr",
      summary: "summary of teajajjaj"
    },
    {
      id:4,
     title: "hi hahhahahqq",
      summary: "summary of teajajjaj"
    },
    {
      id:5,
     title: "hi hahhahahhtwfw",
      summary: "summary of teajajjaj",}
  ];
  const [selected, setSelected] = React.useState<string[]>([]);
  const handleClick = (id: any) => {
    const selectedIndex = selected.indexOf(id);
    console.log(selectedIndex)
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const [users, setUsers] = React.useState<any>([]);

  React.useEffect(() => {
    setUsers(userData);
  }, []);
  const handleChange = (e:any) => {
    const { name, checked } = e.target;
    console.log(name,checked)
      let tempUser = users.map((user:any) =>
        user.title?.toLowerCase() === name?.toLowerCase()  ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
  };
console.log(users,"selected")
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div style={{ marginTop: "65px" }}>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contactus}></Route>
          <Route path="/work" component={WorkCollection}></Route>
        </Switch>
      </Suspense>
      <ScrollBottomToTop showBelow={250} />
      <React.Fragment>
        {userData.map((row: any,index:any) => {
          return (
            <React.Fragment>
             {index+1} <p>
                <Checkbox
                  className="pad0 marl-6"
                  color="primary"
                  name={row.title}
                  // checked={!!isCheckedIcons["Title"]}
                  onChange={handleChange}
                />
                <b>Title:{row.title}</b>
              </p>
              <p>
                {" "}
                <Checkbox
                  className="pad0 marl-6"
                  color="primary"
                  // checked={!!isCheckedIcons["Title"]}
                  onChange={handleChange}
                />
                <b>summary:{row.summary}</b>
              </p>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    </div>
  );
}

export default App;
