
import styles from './page.module.css'

export default function Routes() {
  return (
    <main className={styles.main}>
      <h1>
        <samp style={{ color: "orange" }}>iSay</samp><samp>YouDo</samp>
      </h1>
      <div className={styles.center}>
        <div className="card">
          <p style={{ color: "orange" }} className="read-the-docs">
            "iSayYouDo" é um serviço ou plataforma que se concentra na comunicação
            e execução de tarefas ou ações com base nas instruções fornecidas.
            O nome "iSayYouDo" sugere a ideia de que você pode expressar o que deseja ou precisa ("iSay") e outra pessoa ou serviço executará essas instruções ("YouDo").
            Pode ser aplicado em uma variedade de contextos, como assistentes virtuais, automação residencial, gerenciamento de tarefas, colaboração online ou qualquer situação em que a comunicação de ações seja fundamental.
            "iSayYouDo" facilita a transformação de comandos e instruções em ações prontas para serem executadas.
          </p>
        </div>
      </div>
    </main>
  )
}
