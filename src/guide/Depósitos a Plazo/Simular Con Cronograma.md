# Simular Con Cronograma 

Método para simular el alta de un depósito a plazo fijo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositoAPlazo.SimularConCronograma | RBTPG454 | Global 

### Configuración Backend 

1) Configuración de productos válidos: 

   * En adición a la guía 70100 se agrego que en el valor especifico 3 se indica el tipo de    producto, donde los valores posibles son: (1- Deposito al venicmiento, 2- Pago periódico de intereses) 

   * Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | Valor incremental 
Correlativo 2 | Módulo 
Correlativo 3 | Tipo de operación 
Valor específico 1 | Moneda 
Valor específico 2 | Papel 
Importe específico 1 | Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario) 
Importe específico 2 | Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario) 
Importe específico 3 | Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior) 

> Ejemplo de invocación al método Simular Con Cronograma: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.SimularConCronograma> 
       <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10009</bts:clienteUId> 
         <bts:productoUId>132</bts:productoUId> 
         <bts:capital>20000</bts:capital> 
         <bts:plazo>360</bts:plazo> 
         <bts:periodicidad>30</bts:periodicidad> 
         <bts:sBTDatosExtendidos/> 
      </bts:BTDepositosAPlazo.SimularConCronograma> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": 1, 
         "Usuario": "INSTALADOR", 
         "Token": "30F74741A02C318CEFD55684", 
         "Device": "GL" 
      }, 
      "clienteUId": 10009, 
      "productoUId": 132, 
      "capital": 20000, 
      "plazo": 360, 
      "periodicidad": 30, 
      "sBTDatosExtendidos": "" 
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
      <BTDepositosAPlazo.SimularConCronograma xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sBTDatosExtendidos></sBTDatosExtendidos> 
         <sBTSimulacionDepositoAPlazo> 
            <simulacionId>92</simulacionId> 
            <producto> 
               <productoUId>132</productoUId> 
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre> 
               <moneda>S/.</moneda> 
               <papel>$</papel> 
            </producto> 
            <clienteUId>10009</clienteUId> 
            <Sucursal>Sucursal Principal</Sucursal> 
            <TipoProducto>PP</TipoProducto> 
            <Capital>20000.00</Capital> 
            <ValorNominal>0.00</ValorNominal> 
            <Precio>0.00000000</Precio> 
            <TipoTasa>Efectiva Anual</TipoTasa> 
            <Tasa>11.200000</Tasa> 
            <TipoAnio>360 Días</TipoAnio> 
            <Plazo>360</Plazo> 
            <TipoDia>Días Comerciales</TipoDia> 
            <FechaInicio>2022-04-21</FechaInicio> 
            <FechaVencimiento>2023-04-21</FechaVencimiento> 
            <Periodicidad>30</Periodicidad> 
            <Intereses>2132.71</Intereses> 
            <Impuestos> 
               <SdtsBTConcepto> 
                  <concepto>GANANCIA</concepto> 
                  <valor>106.65</valor> 
                  <texto>Impuestos a las ganancias Totales</texto> 
               </SdtsBTConcepto> 
            </Impuestos> 
            <otrosConceptos></otrosConceptos> 
            <Cronograma> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-05-23</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-06-23</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-07-25</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-08-25</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-09-26</FechaPago> 
                  <Plazo>31</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>183.67</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.18</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-10-26</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-11-28</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-12-28</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-01-30</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-02-28</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-03-31</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-04-21</FechaPago> 
                  <Plazo>21</Plazo> 
                  <TipoCuota>M</TipoCuota> 
                  <Capital>20000.00</Capital> 
                  <Interes>124.24</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>6.21</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
            </Cronograma> 
         </sBTSimulacionDepositoAPlazo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.SimularConCronograma</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:43:24</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>497</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.SimularConCronograma> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
"Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": 1, 
         "Usuario": "INSTALADOR", 
         "Token": "30F74741A02C318CEFD55684", 
         "Device": "GL" 
      }, 
      "sBTDatosExtendidos": "", 
      "sBTSimulacionDepositoAPlazo": { 
         "simulacionId": 92, 
         "producto": { 
         "productoUId": 132, 
         "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.", 
         "moneda": "S/.", 
         "papel": "$" 
         }, 
         "clienteUId": 10009, 
         "Sucursal": "Sucursal Principal", 
         "TipoProducto": "PP", 
         "Capital": 20000, 
         "ValorNominal": 0, 
         "Precio": 0, 
         "TipoTasa": "Efectiva Anual", 
         "Tasa": 11.2, 
         "TipoAnio": "360 Días", 
         "Plazo": 360, 
         "TipoDia": "Días Comerciales", 
         "FechaInicio": "2022-04-21", 
         "FechaVencimiento": "2023-04-21", 
         "Periodicidad": 30, 
         "Intereses": 2132.71, 
         "Impuestos": { 
         "SdtsBTConcepto": { 
            "concepto": "GANANCIA", 
            "valor": 106.65, 
            "texto": "Impuestos a las ganancias Totales" 
         } 
         }, 
         "otrosConceptos": "", 
         "Cronograma": { 
         "SdtsBTCuotaPlanDeposito": [ 
            { 
               "FechaPago": "2022-05-23", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-06-23", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-07-25", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-08-25", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-09-26", 
               "Plazo": 31, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 183.67, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.18, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-10-26", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-11-28", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-12-28", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-01-30", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-02-28", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-03-31", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-04-21", 
               "Plazo": 21, 
               "TipoCuota": "M", 
               "Capital": 20000, 
               "Interes": 124.24, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 6.21, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            } 
         ] 
         } 
      } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
productoUId | Long | Identificador único de producto. 
capital | Short | Importe capital. 
plazo | Short | Plazo. 
periodicidad | Short | Período entre pagos de intereses. 
sdtDatosExtendidos | sBTDatoExtendido | Listado de datos complementarios. 

Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave del dato extendido. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 
Lista | sBTDatosLista | Lista de datos. 

Los campos del tipo de dato estructurado sBTDatosLista son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave de dato de la lista. 
valor | String | Valor de dato de la lista. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosExtendidos | sBTDatoExtendido | Listado de datos complementarios. 
sBTSimulacionDepositoAPlazo | sBTSimulacionDepositoAPlazo | Datos de simulación del depósito. 

Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave del dato extendido. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 
Lista | sBTDatosLista | Lista de datos. 

Los campos del tipo de dato estructurado sBTDatosLista son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave de dato de la lista. 
valor | String | Valor de dato de la lista. 

Los campos del tipo de dato estructurado sBTSimulacionDepositoAPlazo son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
simulacionId | Long | Identificador de simulación. 
producto | sBTProducto | Datos del producto. 
clienteUId | Long | Identificador de cliente. 
sucursal | String | Sucursal. 
tipoProducto | String | Tipo de producto. 
capital | Double | Capital del cronograma. 
valorNominal | Double | Valor nominal. 
precio | Long | Precio. 
tipoTasa | String | Tipo de tasa. 
tasa | Long |  Tasa. 
tipoAnio | String | Tipo de año. 
plazo | Long |  Plazo. 
tipoDia | String | Tipo de día. 
fechaInicio | Date | Fecha de inicio. 
fechaVencimiento | Date | Fecha de vencimiento. 
periodicidad | Long | Periodicidad. 
intereses | Double | Intereses. 
impuestos | sBTConceptos | Datos de impuestos. 
otrosConceptos | sBTConceptos | Otros conceptos. 
cronograma | sBTCronogramaDeposito | Cronograma del préstamo. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

Los campos del tipo de dato estructurado sBTConceptos son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

Los campos del tipo de dato estructurado sBTCronogramaDeposito son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTCronogramaDeposito | sbtCuotaPlanDeposito | Cronograma deposito. 

Los campos del tipo de dato estructurado sbtCuotaPlanDeposito son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago. 
plazo | Long |  Plazo. 
tipoCuota | String | Tipo de cuota. 
capital | Double | Capital. 
interes | Double | Interés. 
impuestos | sBTConceptos | Datos de impuestos. 
otrosConceptos | sBTConceptos | Otros conceptos. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador del Producto. 
30003 | No se recibió el capital del Producto. 
30004 | No se recibió el plazo del Producto. 
40001 | El plazo ingresado es menor al plazo mínimo parametrizado para el producto. 
40003 | El plazo ingresado es mayor al plazo máximo parametrizado para el producto. 
40004 | El monto ingresado es menor al monto mínimo parametrizado para el producto. 
40005 | El monto ingresado es mayor al monto máximo parametrizado para el producto. 
40006 | No se encontró Tasa para el producto a Simular. 

ECHO está desactivado.
