import { Routes, Route } from "react-router-dom";
import Manager from "./views/Manager/Manager";
import User from "./views/User/User";
import Admin from "./views/Admin/Admin";
import Login from "./auth/Login/Login";

import "./styles/main.scss";
import RequireAuth from "./auth/RequiredAuth";

const App = () => {

  return (
    <>
      <Routes>

        {/* Rutas publicas */}
        <Route path="/login" element={
          <div className="container__login">
            <Login />
          </div>
        } />

        {/* Rutas privadas */}
        <Route path="/admin" element={
          <RequireAuth role="Admin">
            <Admin />
          </RequireAuth>
        } />

        <Route path="/editor" element={
          <RequireAuth role="Editor">
            <Manager />
          </RequireAuth>
        } />

        <Route path="/" element={
          <RequireAuth role="User">
            <User /> 
          </RequireAuth>
        } />

      </Routes>

    </>
  )
}

export default App
        {/* <div className="container">
          <div className="row">
              <div className="col-xs-12 col-md-4 col-lg-2 bg-blue">1</div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-8 bg-red">2</div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 bg-green">3</div>
          </div>

          <div className="row">
              <div className="col-xs-4 col-lg-3 bg-blue">1</div>
              <div className="col-xs-4 col-lg-6 bg-red">2</div>
              <div className="col-xs-4 col-lg-3 bg-green">3</div>
          </div>

          <div className="row">
              <div className="col-xs-4 bg-blue">1</div>
              <div className="col-xs-4 bg-red">2</div>
              <div className="col-xs-4 bg-green">3</div>
          </div>
        </div> */}


      //   <div className="wrapper con">
      //   <Sidebar />
      //   <section className="contenido">
      //     <div className="wrapper">
      //       <Header nameSection="Dashboard" />
  
      //       <div className="container">
      //         <div className="row">      
      //           {
      //             cardContent.map( item => (
      //               <div className="card-sup col-xs-12 col-md-3">
      //                 <Card  key={item.title} title={item.title} number={item.number} description={item.description} icon={item.icon}/>
      //               </div>
      //             ))
      //           }
      //         </div>
      //         </div>
  
  
      //       <Table columns={columns} data={data} />
      //     </div>
      //     <Footer /> 
      //   </section>
      // </div>




        // const cardContent = [
  //   {title: "Metas", number: "98", description: "Una descripción", icon: <BiChip />},
  //   {title: "Metas", number: "98", description: "Una descripción", icon: <BiChip />},
  //   {title: "Metas", number: "98", description: "Una descripción", icon: <BiChip />},
  //   {title: "Metas", number: "98", description: "Una descripción", icon: <BiChip />},
  // ]
  
  // const data = useMemo(
  //   () => [
  //     {
  //       col1: 'Hello',
  //       col2: 'World',
  //       col3: "asdasdd",
  //       col4: "asdasdasd",
  //       indicator: <Link to="/indicators">Indicadores</Link>
  //     },
  //     {
  //       col1: 'react-table',
  //       col2: 'rocks',
  //       col3: "asdasdd",
  //       col4: "asdasdasd",
  //       indicator: <Link to="/indicators">Indicadores</Link>
  //     },
  //     {
  //       col1: 'whatever',
  //       col2: 'you want',
  //       col3: "asdasdd",
  //       col4: "asdasdasd",
  //       indicator: <Link to="/indicators">Indicadores</Link>
  //     }
  //   ],
  //   []
  // )

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'Column 1',
  //       accessor: 'col1', // accessor is the "key" in the data
  //     },
  //     {
  //       Header: 'Column 2',
  //       accessor: 'col2',
  //     },
  //     {
  //       Header: 'Column 3',
  //       accessor: 'col3',
  //     },
  //     {
  //       Header: 'Column 4',
  //       accessor: 'col4',
  //     },
  //     {
  //       Header: 'Indicadores',
  //       accessor: 'indicator',
  //     },
  //   ],
  //   []
  // )