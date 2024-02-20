# Obtener Detalle de Calendario 

Método para obtener el detalle de los días de un calendario dado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerDetalleCalendario | RBTPG285 | Global 

> Ejemplo de invocación al método Obtener Detalle de Calendario: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerDetalleCalendario> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>MC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:calendarioId>1</bts:calendarioId> 
         <bts:fechaInicio>2020-10-01</bts:fechaInicio> 
         <bts:fechaFin>2020-10-31</bts:fechaFin> 
      </bts:BTConfiguracionBantotal.ObtenerDetalleCalendario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X GET \ 
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerEstados' \ 
   -H 'cache-control: no-cache' \ 
   -H 'content-type: application/json' \ 
   -d '{ 
   "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
	"calendarioId":1, 
	"calendarioId":"2020-10-01", 
	"calendarioId":"2020-10-31", 
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
      <BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>200f0b8b654A8B5C60A82434</Token> 
         </Btinreq> 
         <descripcionCalendario>Calendario 1</descripcionCalendario> 
         <sdtDetalleCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-01</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-02</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-03</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-04</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-05</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-06</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-07</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-08</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-09</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-10</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-11</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-12</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-13</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-14</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-15</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-16</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-17</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-18</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-19</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-20</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-21</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-22</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-23</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-24</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-25</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-26</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-27</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-28</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-29</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-30</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-10-31</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
         </sdtDetalleCalendario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>109132</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleCalendario</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-11-24</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>10:41:08</Hora> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
		"Device": "MC", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "200f0b8b654A8B5C60A82434" 
	}, 
	"descripcionCalendario": "Calendario 1", 
	"sdtDetalleCalendario": { 
	  "sBTDiaCalendario": [ 
		{ 
		  "fecha": "2020-10-01", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-02", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-03", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-04", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-05", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-06", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-07", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-08", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-09", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-10", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-11", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-12", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-13", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-14", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-15", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-16", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-17", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-18", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-19", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-20", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-21", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-22", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-23", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-24", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-25", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-10-26", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-27", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-28", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-29", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-30", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-10-31", 
		  "habil": "N" 
		} 
	  ] 
	}, 
	"Btoutreq": { 
	  "Numero": "109132", 
	  "Estado": "OK", 
	  "Servicio": "BTConfiguracionBantotal.ObtenerDetalleCalendario", 
	  "Requerimiento": "1", 
	  "Fecha": "2020-11-24", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "10:41:08" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
calendarioId | Short | Identificador de calendario. 
fechaInicio | Date | Fecha de inicio de visualización de calendario. 
fechaFin | Date | Fecha de fin de visualización de calendario. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcionCalendario | String | Descripción del calendario. 
sdtDetalleCalendario | sBTDiaCalendario | Detalle de la consulta del calendario. 

El tipo de dato estructurado sBTDiaCalendario tiene los siguientes campos: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fecha | Date | Día del calendario. 
habil | String | ¿Día hábil? (S/N) 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de calendario.       
30002 | No se recibió fecha de inicio. 
30003 | No se recibió fecha de fin. 
40001 | No existe calendario con el identificador ingresado. 
40002 | No se pudo obtener detalle para los datos ingresados ingresados. 

 
