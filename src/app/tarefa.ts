export type Estado = 'pendente' | 'em-curso' | 'concluida'; //não é enum para não precisar de convertar dados entre JSON e typescript.

export type Prioridade = 'alta' | 'media' | 'baixa';

export interface Tarefa {
    readonly id: string;
    titulo: string;
    descricao: string;
    estado: string;
    prioridade: string;
    dataLimite: string;
}
