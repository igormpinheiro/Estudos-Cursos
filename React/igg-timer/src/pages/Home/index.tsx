import {
  CountDownButton,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  TaskAmountInput,
  TaskInput,
} from './sytles.ts'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto..." />
          <label htmlFor="minutesAmount">durante</label>
          <TaskAmountInput id="minutesAmount" placeholder="00" />
          <span>minutos</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <CountDownButton type="submit">Iniciar</CountDownButton>
      </form>
    </HomeContainer>
  )
}
