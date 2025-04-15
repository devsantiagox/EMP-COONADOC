'use client';

import React, { useRef } from 'react';
import './searchForm.css';

export default function SearchForm() {
    const formRef = useRef(null);

    const handleCloseSearchForm = () => {
        document.body.classList.remove('box-collapse-open');
        document.body.classList.add('box-collapse-closed');
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <>
            <div className='click-closed'></div>
            <div className='box-collapse'>
                <div className="title-box-d">
                    <h3 className="title-d">Buscar Servicios Disponibles</h3>
                </div>
                <span
                    className="close-box-collapse right-boxed bi bi-x"
                    onClick={handleCloseSearchForm}
                ></span>
                <div className="box-collapse-wrap form">
                    <form className="form-a" ref={formRef}>
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" htmlFor="Type">
                                        Palabra Clave
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg form-control-a"
                                        placeholder="Buscar Servicio"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="Type">
                                        Tipo de Servicio
                                    </label>
                                    <select
                                        className="form-control form-select form-control-a"
                                        id="Type"
                                    >
                                        <option>Todos los tipos</option>
                                        <option>Formatos</option>
                                        <option>Politicas</option>
                                        <option>Créditos</option>
                                        <option>Turismo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="Type">
                                        Año de Creación
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg form-control-a"
                                        placeholder="Buscar por año"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">
                                    Buscar Servicio
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
