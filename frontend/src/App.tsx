import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"


function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
              <SalesCard />
              
          </div>
        </section>
      </main>
    </>
  )
}

export default App
