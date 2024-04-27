import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';



import {
    HomeContainer,
    StartCountdownButton,
    StopCountDownButton,
} from "./styles";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";


const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(1, 'O ciclo precisa ser no mínimo de 5 minutos.')
        .max(60, 'O ciclo deve ser de no máximo 60 minutos.'),

})

type newCycleFormData = zod.infer<typeof newCycleValidationSchema>


export function Home() {
    const { activeCycle, CreateNewCycle, InterruptCurrentCycle } = useContext(CyclesContext)

    const newCycleForm = useForm<newCycleFormData>({
        resolver: zodResolver(newCycleValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,

        },
    })

    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCylcle(data: newCycleFormData) {
        CreateNewCycle(data)
        reset()

    }

    const task = watch('task')
    const isSubmitDisable = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCylcle)} action="">

                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />



                {activeCycle ? (
                    <StopCountDownButton onClick={InterruptCurrentCycle} type="button">
                        <HandPalm size={24} />
                        Interromper
                    </StopCountDownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisable} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}