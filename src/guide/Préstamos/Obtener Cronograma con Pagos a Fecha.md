# Obtener Cronograma con Pagos a Fecha 

Método para obtener el cronograma de un préstamo teniendo en cuenta solamente los pagos hasta la fecha indicada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerCronogramaConPagosAFecha | RBTPG440 | Global 

> Ejemplo de invocación al método Obtener Cronograma con Pagos a Fecha: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerCronogramaConPagosAFecha> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>9aaec33a3bCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>8892</bts:operacionUId> 
         <bts:fecha>2022-11-16</bts:fecha> 
      </bts:BTPrestamos.ObtenerCronogramaConPagosAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaConPagosAFecha=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId" : 8892, 
    "fecha" : "2022-11-16" 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrestamos.ObtenerCronogramaConPagosAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
        <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
        </Btinreq> 
        <sdtCuotasPrestamos> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>292.6</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>0</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>1</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-07</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Paga</estado> 
                <fechaPago>2022-09-21</fechaPago> 
                <total>0</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>282.1</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>0</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>2</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-16</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Paga</estado> 
                <fechaPago>2022-10-15</fechaPago> 
                <total>0</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>270.89</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>0</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>3</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-16</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Paga</estado> 
                <fechaPago>2022-10-31</fechaPago> 
                <total>0</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>112.51</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>147.89</capital> 
                <diasMora>1</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>4</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-16</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Pago parcial</estado> 
                <fechaPago>2022-11-15</fechaPago> 
                <total>147.89</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>6.22</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>6.22</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>29.68</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>218.9</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>5</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2022-11-30</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>5.22</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>5.22</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>24.08</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>225.5</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>6</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2022-12-15</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>4.4</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>4.4</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>19.56</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>230.84</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>7</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2022-12-31</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>3.12</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>3.12</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>12.42</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>239.26</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>8</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2023-01-15</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>2.1</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>2.1</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>6.74</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>246.9</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>9</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2023-01-31</fechaPago> 
                <total>260.64</total> 
            </SdtsBTCuotaPrestamo> 
	    </sdtCuotasPrestamos> 
	    <Erroresnegocio></Erroresnegocio> 
        <Btoutreq> 
            <Numero>898</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerCronogramaConPagosAFechaResponse</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>11:44:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
        </Btoutreq> 
      </BTPrestamos.ObtenerCronogramaConPagosAFechaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtCuotasPrestamos": { 
        "SdtsBTCuotaPrestamo": [ 
            { 
                "impuestos": 0, 
                "importePago": 292.6, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 0, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 1, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-07", 
                "redondeo": 0, 
                "estado": "Paga", 
                "fechaPago": "2022-09-21", 
                "total": 0 
            }, 
            { 
                "impuestos": 0, 
                "importePago": 282.1, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 0, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 2, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-16", 
                "redondeo": 0, 
                "estado": "Paga", 
                "fechaPago": "2022-10-15", 
                "total": 0 
            }, 
            { 
                "impuestos": 0, 
                "importePago": 270.89, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 0, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 3, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-16", 
                "redondeo": 0, 
                "estado": "Paga", 
                "fechaPago": "2022-10-31", 
                "total": 0 
            }, 
            { 
                "impuestos": 0, 
                "importePago": 112.51, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 147.89, 
                "diasMora": 1, 
                "tipoCuota": "M", 
                "nroCuota": 4, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-16", 
                "redondeo": 0, 
                "estado": "Pago parcial", 
                "fechaPago": "2022-11-15", 
                "total": 147.89 
            }, 
            { 
                "impuestos": 6.22, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 6.22, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 29.68, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 218.9, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 5, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2022-11-30", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 5.22, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 5.22, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 24.08, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 225.5, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 6, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2022-12-15", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 4.4, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 4.4, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 19.56, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 230.84, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 7, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2022-12-31", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 3.12, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 3.12, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 12.42, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 239.26, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 8, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2023-01-15", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 2.1, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 2.1, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 6.74, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 246.9, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 9, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2023-01-31", 
                "total": 260.64 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerCronograma", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "12:27:52", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
fecha   | Date  | Fecha de los pagos. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuotasPrestamos | sBTCuotaPrestamo | Cronograma del préstamo. 

Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes: 

###Versión V2R2 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
nroCuota | Int | Número de cuota. 
fechaPago | Date | Fecha de pago prevista . 
tipoCuota | String | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). 
concepto | String |  (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija). 
impuestos | Double | Impuestos de la cuota. 
subsidios | Double | Subsidios  de la cuota. 
capital | Double | Capital de la cuota. 
intereses | Double | Intereses de la cuota. 
comisiones | Double | Comisiones de la cuota. 
seguros | Double | Seguros de la cuota. 
interesMora | Double | Intereses de mora de la cuota. 
otrosConceptos | Double | Importe otros conceptos. 
detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales. 
total | Double | Total de la cuota. 
diasMora | Int | Días de mora de la cuota. 
estado | String | Estado de la cuota. 
estadoDsc | String | Descripción del estado de la cuota. 
fechaUltimoPago | Date | Fecha de último pago de la cuota. 
importePago | Double | Importe pagado. 

###Versión V2R3 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
nroCuota | Int | Número de cuota. 
fechaPago | Date | Fecha de pago prevista . 
tipoCuota | String | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). 
concepto | String |  (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija). 
impuestos | Double | Impuestos de la cuota. 
subsidios | Double | Subsidios  de la cuota. 
capital | Double | Capital de la cuota. 
intereses | Double | Intereses de la cuota. 
comisiones | Double | Comisiones de la cuota. 
seguros | Double | Seguros de la cuota. 
interesMora | Double | Intereses de mora de la cuota. 
otrosConceptos | Double | Importe otros conceptos. 
detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales. 
total | Double | Total de la cuota. 
diasMora | Int | Días de mora de la cuota. 
estado | String | Estado de la cuota. 
estadoDsc | String | Descripción del estado de la cuota. 
fechaUltimoPago | Date | Fecha de último pago de la cuota. 
importePago | Double | Importe pagado. 
redondeo | Double | Redondeo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el Identificador. 
30003 | No se recibió fecha para consulta. 

 
