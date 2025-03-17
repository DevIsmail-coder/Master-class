
import { useUser } from "../../context"
import "./Dashboard.css"


const Dashboard = () => {

const {allColors} = useUser()
    return (
        <div className='Dashboardbody'>
            <header className='Dashboardheader'>Hello Ismail you are welcome back</header>
            <main>
                <article>
                    {
                        allColors.map((i) => (
                            <span key={i.id} style={{ background: `${i.color}` }}>
                                Hello
                            </span>
                        ))
                    }
                </article>
                <article>
                    HELLO WORLD
                </article>
            </main>
        </div>
    )
}

export default Dashboard
