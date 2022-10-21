export interface Pensum {
    id:      number;
    periodo: number;
    materia: Materia;
    usuario: Usuario;
}

export interface Materia {
    id:     number;
    nombre: string;
}

export interface Usuario {
    id:              number;
    nombres:         string;
    correo:          string;
    edad:            number;
    telefono:        string;
    fechaNacimiento: Date;
}

