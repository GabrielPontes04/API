# Contratar Simulación 

Método para contratar un depósito a plazo fijo a partir de una simulación existente. 

Este servicio sirve para contratar simulaciones realizadas desde el servicio BTDepositoAPlazo.SimularConCronograma 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositoAPlazo.ContratarSimulacion | RBTPG457 | Global 

### Configuración Backend 

1) Configuración de productos válidos: 

   * Se debe agregar en la guía especial 70101, para cada producto de la siguiente manera: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | Módulo. 
Correlativo 2 | Tipo de operación (El valor 999 indica todos los tipos de operación). 
Correlativo 3 | Valor incremental. 
Valor específico 1 | Moneda (El valor 9999 indica todas las monedas). 
Valor específico 2 | Papel (El valor 999999 indica todos los papeles). 
Valor específico 3 | Código de instrucción a habilitar. 
Importe específico 1 | Tipo de deposito (1- Deposito al venicmiento, 2- Pago periódico de intereses). 

> Ejemplo de invocación al método Contratar Simulacion: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ContratarSimulacion> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10009</bts:clienteUId> 
         <bts:simulacionId>93</bts:simulacionId> 
         <bts:InstruccionVTO>6</bts:InstruccionVTO> 
         <bts:cuentaUIdDestinoVTO></bts:cuentaUIdDestinoVTO> 
         <bts:InstruccionPP>7</bts:InstruccionPP> 
         <bts:cuentaUIdDestinoPP>10120</bts:cuentaUIdDestinoPP> 
         <bts:cuentaUIdDebito>10120</bts:cuentaUIdDebito> 
         <bts:sBTDatosExtendidos/> 
      </bts:BTDepositosAPlazo.ContratarSimulacion> 
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
        "simulacionId": 93, 
        "InstruccionVTO": 6, 
        "cuentaUIdDestinoVTO": "", 
        "InstruccionPP": 7, 
        "cuentaUIdDestinoPP": 10120, 
        "cuentaUIdDebito": 10120, 
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
      <BTDepositosAPlazo.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sBTDatosExtendidos></sBTDatosExtendidos> 
         <operacionUId>15</operacionUId> 
         <movimientoUId>15</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.ContratarSimulacion</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>11:35:46</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>507</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.ContratarSimulacionResponse> 
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
        "operacionUId": 15, 
        "movimientoUId": 15, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTDepositosAPlazo.ContratarSimulacion", 
          "Fecha": "2022-11-29", 
          "Hora": "11:35:46", 
          "Requerimiento": 1, 
          "Numero": 507, 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
simulacionId | Long | Identificador único de la simulación. 
instruccionVTO | Short | Identificador de la intrucción al vencimento 
cuentaUIdDestinoVTO | Long | Identificador único de la operación de la cuenta destino al vencimiento. 
InstruccionPP | Long | Identificador de la instruccion de pago periódico. 
cuentaUIdDestinoPP | Short | Identificador único de la operación de la cuenta destino del pago periodico. 
cuentaUIdDebito | Long | Identificador único de la operación de la cuenta de débito. 
sdtDatosExtendidos | sBTDatoExtendido | Listado de datos complementarios. 

Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave del dato extendido. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 
Lista | sBTDatosLista | Lista de datos. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosExtendidos | sBTDatoExtendido | Listado de datos complementarios. 
operacionUId | Long | Identificador único de la operación. 
movimientoUId | Long | Identificador único de movimiento. 

Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave del dato extendido. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 
Lista | sBTDatosLista | Lista de datos. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador de la simulación. 
30003 | No se recibió la instrucción de acreditación al vencimiento. 
30005 | No se recibió la instrucción de acreditación periodica. 
30007 | No se recibió el identificador de cuenta de débito. 
30010 | No se recuperaron datos para el identificador de cliente: [Número de identificador]. 
30011 | No se recuperaron datos para el identificador de cuenta de acreditación al vencimiento: [Número de identificador]. 
30012 | No se recuperaron datos para el identificador de cuenta de acreditación periodica: [Número de identificador]. 
30013 | No se recuperaron datos para el identificador de cuenta de debito: [Número de identificador]. 
30015 | La simulación no esta disponible para su contratación. 
30016 | La simulación no se ecuentra vigente para su contratación. 
30017 | La simulación no corresponde al cliente. 
30020 | Ocurrio un error al generar el Identificador de movimiento. 
30021 | Ocurrio un error al generar el Identificador de operación de depósito. 
30100 | Error en la contabilización. 

 
