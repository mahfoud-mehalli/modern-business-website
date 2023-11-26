import { clients } from "../constants"
import styles from "../style"

const Clients = () =>(
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client)=>(
        <didv key={client.id} className={`flex-1 ${styles.flexCenter} md:min-w-[192px] min-w-[120px] client-logo`}>
          <img src={client.logo} alt={client.id} className="sm:w-[192px] w-[100px] object-contain "/>
        </didv>
      ))}
    </div>
  </section>
)


export default Clients