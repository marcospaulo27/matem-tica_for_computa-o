"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
function calcularTempoParaMontante(capitalInicial, montante, taxaJuros) {
    if (capitalInicial <= 0 || montante <= 0 || taxaJuros <= 0) {
        throw new Error("Os valores de capital inicial, montante e taxa de juros devem ser maiores que zero.");
    }
    if (montante <= capitalInicial) {
        throw new Error("O montante deve ser maior que o capital inicial.");
    }
    const logBase = Math.log(1 + taxaJuros);
    const tempoNecessario = Math.ceil(Math.log(montante / capitalInicial) / logBase);
    return tempoNecessario;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = (str) => {
    return new Promise((resolve) => {
        rl.question(str, resolve);
    });
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const capitalInicialStr = yield question('Digite o capital inicial: ');
        const montanteStr = yield question('Digite o montante desejado: ');
        const taxaJurosStr = yield question('Digite a taxa de juros (em decimal, por exemplo, 0.05 para 5%): ');
        const capitalInicial = parseFloat(capitalInicialStr);
        const montante = parseFloat(montanteStr);
        const taxaJuros = parseFloat(taxaJurosStr);
        if (isNaN(capitalInicial) || isNaN(montante) || isNaN(taxaJuros)) {
            console.error('Por favor, forneça valores numéricos válidos.');
            process.exit(1);
        }
        const tempo = calcularTempoParaMontante(capitalInicial, montante, taxaJuros);
        console.log(`Tempo necessário: ${tempo} períodos`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error('Ocorreu um erro desconhecido');
        }
        process.exit(1);
    }
    finally {
        rl.close();
    }
});
main();
