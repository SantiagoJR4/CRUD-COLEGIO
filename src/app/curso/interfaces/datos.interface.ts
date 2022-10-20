export interface Pensum {
    id:      number;
    periodo: number;
    usuario: Usuario;
    materia: Materia;
}

export interface Materia {
    id:     number;
    nombre: string;
}

export interface Usuario {
    id:      number;
    nombres: string;
    correo:  string;
}
