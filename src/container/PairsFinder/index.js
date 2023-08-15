import React from 'react';
import { useForm } from "react-hook-form";
import './index.css';
import calculatePairs from '../../util/pairsFinder';

const PairsFinder = ()=>{
    const [resultData, setResultData] = React.useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = React.useCallback((data)=>{
        const pairs = calculatePairs(data.pairFinderInput, data.expectedPairResult)
        const resultMessage = `Pairs: ${resultMessage}`       
        setResultData(resultMessage)
    },[])
    const errorMessage = errors.pairFinderInput?.message || errors.expectedPairResult?.message; 
    const displayError = errors.pairFinderInput|| errors.expectedPairResult;
    const sectionMessage = displayError ? errorMessage : resultData;
    const sectionClass = displayError ? "error" : "result";
    return  <><form onSubmit={handleSubmit(onSubmit)} className='pair-form'>
        <input className='styled-input' 
            id="expectedPairResult" 
            placeholder='Type the expected pair sum'
            {...register(
                    "expectedPairResult", 
                    { 
                        required: {value: true, message: "Add the expected pair sum"}, 
                        pattern:{ value: /^-?\d+$/, message: "Wrong expected pair result input format" }, 
                        onChange: (e) => {setResultData('') }
                    })
                } 
        />
        <input className='styled-input' 
            id="pairFinderInput" 
            placeholder='Add a number chain separated by comma'
            {...register(
                "pairFinderInput", 
                { 
                    required: {value: true, message: "Add the chain of numbers"}, 
                    pattern: { value: /^(-?\d+(,-?\d+)*)?$/, 
                    message: "Wrong list of numbers input format" }, 
                    onChange: (e) => {setResultData('')} 
                })
            } 
        />
        <input className='styled-input' type="submit" value="Get Pairs" />
    </form>
    <section className={`section_${sectionClass}`}>{sectionMessage}</section>
    </>
}
export default PairsFinder;