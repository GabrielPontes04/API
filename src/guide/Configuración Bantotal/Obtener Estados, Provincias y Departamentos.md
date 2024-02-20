# Obtener Estados, Provincias y Departamentos 

Método para obtener un listado de los estados/provincias/departamentos ingresados en Bantotal para un determinado país. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentos | RBTPG043 | Global 

> Ejemplo de invocación al método Obtener Estados, Provincias y Departamentos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:pais>845</bts:pais> 
      </bts:BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerEstadosProvinciasDepartamentos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 850e7fcb-db29-91ae-2326-446b9167205a' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "pais": 845 
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
      <BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstados> 
            <sBTEstado> 
               <identificador>1</identificador> 
               <descripcion>Artigas</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>2</identificador> 
               <descripcion>Canelones</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>3</identificador> 
               <descripcion>Cerro Largo</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>4</identificador> 
               <descripcion>Colonia</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>5</identificador> 
               <descripcion>Durazno</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>6</identificador> 
               <descripcion>Flores</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>7</identificador> 
               <descripcion>Florida</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>8</identificador> 
               <descripcion>Lavalleja</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>9</identificador> 
               <descripcion>Maldonado</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>10</identificador> 
               <descripcion>Montevideo</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>11</identificador> 
               <descripcion>Paysandú</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>12</identificador> 
               <descripcion>Río Negro</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>13</identificador> 
               <descripcion>Rivera</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>14</identificador> 
               <descripcion>Rocha</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>15</identificador> 
               <descripcion>Salto</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>16</identificador> 
               <descripcion>San José</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>17</identificador> 
               <descripcion>Soriano</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>18</identificador> 
               <descripcion>Tacuarembó</descripcion> 
            </sBTEstado> 
            <sBTEstado> 
               <identificador>19</identificador> 
               <descripcion>Treinta y Tres</descripcion> 
            </sBTEstado> 
         </sdtEstados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>794</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentos</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>17:52:33</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentosResponse> 
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
    "sdtEstados": { 
        "sBTEstado": [ 
            { 
                "descripcion": "Artigas", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "Canelones", 
                "identificador": "2" 
            }, 
            { 
                "descripcion": "Cerro Largo", 
                "identificador": "3" 
            }, 
            { 
                "descripcion": "Colonia", 
                "identificador": "4" 
            }, 
            { 
                "descripcion": "Durazno", 
                "identificador": "5" 
            }, 
            { 
                "descripcion": "Flores", 
                "identificador": "6" 
            }, 
            { 
                "descripcion": "Florida", 
                "identificador": "7" 
            }, 
            { 
                "descripcion": "Lavalleja", 
                "identificador": "8" 
            }, 
            { 
                "descripcion": "Maldonado", 
                "identificador": "9" 
            }, 
            { 
                "descripcion": "Montevideo", 
                "identificador": "10" 
            }, 
            { 
                "descripcion": "Paysandú", 
                "identificador": "11" 
            }, 
            { 
                "descripcion": "Río Negro", 
                "identificador": "12" 
            }, 
            { 
                "descripcion": "Rivera", 
                "identificador": "13" 
            }, 
            { 
                "descripcion": "Rocha", 
                "identificador": "14" 
            }, 
            { 
                "descripcion": "Salto", 
                "identificador": "15" 
            }, 
            { 
                "descripcion": "San José", 
                "identificador": "16" 
            }, 
            { 
                "descripcion": "Soriano", 
                "identificador": "17" 
            }, 
            { 
                "descripcion": "Tacuarembó", 
                "identificador": "18" 
            }, 
            { 
                "descripcion": "Treinta y Tres", 
                "identificador": "19" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "803", 
        "Estado": "OK", 
        "Servicio": "BTConfiguracionBantotal.ObtenerEstadosProvinciasDepartamentos", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:05:18", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
pais | Short | Identificador de país. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtEstados | sBTEstado | Listado de estados. 

Los campos del tipo de dato estructurado sBTEstado son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador de estado. 
descripcion | String | Descripcion de estado. 

### Errores 

No aplica. 

 
