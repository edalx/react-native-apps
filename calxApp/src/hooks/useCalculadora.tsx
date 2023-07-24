import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('')
    const [numeroAnterior, setnumeroAnterior] = useState('')
    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setnumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        //
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

            } else if (numero !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);

            } else {
                setNumero(numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        if (numero.substring(0, 1) === '-' && numero.length == 2) {
            setNumero("");
        } else if (numero.length > 0) {
            setNumero(numero.slice(0, -1));
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1));
        } else {
            setnumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                if (num1 !== 0) {
                    setNumero(`${num2 / num1}`);
                }
                break;
            default:
                break;
        }
        setnumeroAnterior('0');
    }

    return {
        numeroAnterior,
        numero,
        limpiar,
        btnDelete,
        positivoNegativo,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}
