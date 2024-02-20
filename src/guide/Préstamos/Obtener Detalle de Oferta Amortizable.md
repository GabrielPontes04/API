# Obtener Detalle de Oferta Amortizable 

Método para obtener el detalle de la oferta amortizable de préstamo simulado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDetalleOfertaAmortizable | RBTPG526 | Global 

> Ejemplo de invocación al servicio de Obtener Detalle Oferta Amortizable: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalleOfertaAmortizable> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token> 
         </bts:Btinreq> 
         <bts:simulacionUId>134</bts:simulacionUId> 
         <bts:clienteUId>322</bts:clienteUId> 
         <bts:cantidadCuotas>12</bts:cantidadCuotas> 
         <bts:destinoCredito></bts:destinoCredito> 
      </bts:BTPrestamos.ObtenerDetalleOfertaAmortizable> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleOfertaAmortizable' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "3JPL6DC33CD84655A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"simulacionUId": 134, 
   "clienteUId": 322, 
   "cantidadCuotas": 12, 
   "destinoCredito":  
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
      <BTPrestamos.ObtenerDetalleOfertaAmortizableResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>E1F15D391E5C8FAC4189A627</Token> 
         </Btinreq> 
         <sdtSimulacionOutput> 
            <cft>28.00</cft> 
            <plus>0.000000</plus> 
            <nomSucursal>Casa Matriz</nomSucursal> 
            <otrosConceptos></otrosConceptos> 
            <tasaNominalAnual>20.881010</tasaNominalAnual> 
            <precio>0.000000</precio> 
            <tipoAmortizacionDsc>Francés con Seg.e Impu.</tipoAmortizacionDsc> 
            <cronograma> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>-1028.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>1231.73</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>1</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2024-11-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>770.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>202</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>770.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>900.59</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>191.90</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>2</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2024-12-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>919.71</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>176.23</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>3</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-01-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>939.24</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>160.22</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>4</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-02-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>959.18</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>143.88</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>5</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-03-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>979.54</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>127.19</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>6</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-04-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>1000.34</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>110.14</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>7</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-05-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>1021.57</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>92.74</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>8</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-06-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>1043.26</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>74.96</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>9</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-07-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>1065.40</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>56.81</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>10</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-08-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>1088.02</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>38.27</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>11</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.71</cuota> 
                  <fechaPago>2025-09-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
               <SdtsBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>1111.15</capital> 
                  <impuestos>0.00</impuestos> 
                  <detalleComisiones></detalleComisiones> 
                  <intereses>19.33</intereses> 
                  <subsidios>0.00</subsidios> 
                  <nroCuota>12</nroCuota> 
                  <concepto>Capital/Interés</concepto> 
                  <tipoCuota>M</tipoCuota> 
                  <redondeo>0.00</redondeo> 
                  <cuota>1244.73</cuota> 
                  <fechaPago>2025-10-02</fechaPago> 
                  <detalleSeguros> 
                     <SdtsBTSeguroPrestamo> 
                        <porcentaje>0.0000</porcentaje> 
                        <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                        <tipo>VIDA</tipo> 
                        <importe>110.00</importe> 
                        <codigo>100</codigo> 
                     </SdtsBTSeguroPrestamo> 
                  </detalleSeguros> 
                  <plazo>30</plazo> 
                  <detalleConceptos></detalleConceptos> 
                  <comisiones>0.00</comisiones> 
                  <seguros>110.00</seguros> 
               </SdtsBTCuotaSimulacion> 
            </cronograma> 
            <comisionesDesembolso>0.00</comisionesDesembolso> 
            <segurosDesembolso>0.00</segurosDesembolso> 
            <cantidadCuotas>12</cantidadCuotas> 
            <impuestosDesembolso>0.00</impuestosDesembolso> 
            <fechaPrimerPago>2024-11-02</fechaPrimerPago> 
            <operacionUId>50</operacionUId> 
            <valorCuota>1244.71</valorCuota> 
            <diasRevision>0</diasRevision> 
            <totalSeguros>1980.00</totalSeguros> 
            <plazo>532</plazo> 
            <producto> 
               <moneda>$</moneda> 
               <papel>$</papel> 
               <otrosConceptos></otrosConceptos> 
               <productoUId>71</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <capital>10000.00</capital> 
            <tipoAmortizacionCod>3</tipoAmortizacionCod> 
            <totalIntereses>2423.40</totalIntereses> 
            <seguros> 
               <SdtsBTSeguroPrestamo> 
                  <porcentaje>0.0000</porcentaje> 
                  <descripcion>SANCOR - Vida - Variante 1</descripcion> 
                  <tipo>VIDA</tipo> 
                  <importe>1980.00</importe> 
                  <codigo>100</codigo> 
               </SdtsBTSeguroPrestamo> 
            </seguros> 
            <fechaValor>2024-04-10</fechaValor> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <totalImpuestos>536.29</totalImpuestos> 
            <coeficienteIVA>0.000000</coeficienteIVA> 
            <periodicidad>30</periodicidad> 
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual> 
            <totalPrestamo>14950.84</totalPrestamo> 
            <fechaVencimiento>2025-10-02</fechaVencimiento> 
            <tasa>23.000000</tasa> 
            <redondeo>0.00</redondeo> 
            <montoDesembolso>10000.00</montoDesembolso> 
            <comisiones> 
               <SdtsBTComisionPrestamo> 
                  <porcentaje>0.0000</porcentaje> 
                  <descripcion>Hipotecario - Importe Fijo</descripcion> 
                  <importe>0.00</importe> 
                  <codigo>141</codigo> 
               </SdtsBTComisionPrestamo> 
               <SdtsBTComisionPrestamo> 
                  <porcentaje>0.0000</porcentaje> 
                  <descripcion>F.H.A.</descripcion> 
                  <importe>14.30</importe> 
                  <codigo>200</codigo> 
               </SdtsBTComisionPrestamo> 
            </comisiones> 
            <totalComisiones>0.00</totalComisiones> 
            <comisionesCuota></comisionesCuota> 
         </sdtSimulacionOutput> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16952</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDetalleOfertaAmortizable</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-10-31</Fecha> 
            <Hora>13:44:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleOfertaAmortizableResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "sdtSimulacionOutput": { 
      "cft": 28, 
      "plus": 0, 
      "nomSucursal": "Casa Matriz", 
      "otrosConceptos": "", 
      "tasaNominalAnual": 20.88101, 
      "precio": 0, 
      "tipoAmortizacionDsc": "Francés con Seg.e Impu.", 
      "cronograma": { 
      "SdtsBTCuotaSimulacion": [ 
         { 
            "otrosConceptos": 0, 
            "capital": -1028, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 1231.73, 
            "subsidios": 0, 
            "nroCuota": 1, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2024-11-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 770, 
               "codigo": 100 
            } 
            }, 
            "plazo": 202, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 770 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 900.59, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 191.9, 
            "subsidios": 0, 
            "nroCuota": 2, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2024-12-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 919.71, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 176.23, 
            "subsidios": 0, 
            "nroCuota": 3, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-01-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 939.24, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 160.22, 
            "subsidios": 0, 
            "nroCuota": 4, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-02-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 959.18, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 143.88, 
            "subsidios": 0, 
            "nroCuota": 5, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-03-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 979.54, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 127.19, 
            "subsidios": 0, 
            "nroCuota": 6, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-04-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 1000.34, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 110.14, 
            "subsidios": 0, 
            "nroCuota": 7, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-05-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 1021.57, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 92.74, 
            "subsidios": 0, 
            "nroCuota": 8, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-06-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 1043.26, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 74.96, 
            "subsidios": 0, 
            "nroCuota": 9, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-07-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 1065.4, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 56.81, 
            "subsidios": 0, 
            "nroCuota": 10, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-08-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 1088.02, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 38.27, 
            "subsidios": 0, 
            "nroCuota": 11, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.71, 
            "fechaPago": "2025-09-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         }, 
         { 
            "otrosConceptos": 0, 
            "capital": 1111.15, 
            "impuestos": 0, 
            "detalleComisiones": "", 
            "intereses": 19.33, 
            "subsidios": 0, 
            "nroCuota": 12, 
            "concepto": "Capital/Interés", 
            "tipoCuota": "M", 
            "redondeo": 0, 
            "cuota": 1244.73, 
            "fechaPago": "2025-10-02", 
            "detalleSeguros": { 
            "SdtsBTSeguroPrestamo": { 
               "porcentaje": 0, 
               "descripcion": "SANCOR - Vida - Variante 1", 
               "tipo": "VIDA", 
               "importe": 110, 
               "codigo": 100 
            } 
            }, 
            "plazo": 30, 
            "detalleConceptos": "", 
            "comisiones": 0, 
            "seguros": 110 
         } 
      ] 
      }, 
      "comisionesDesembolso": 0, 
      "segurosDesembolso": 0, 
      "cantidadCuotas": 12, 
      "impuestosDesembolso": 0, 
      "fechaPrimerPago": "2024-11-02", 
      "operacionUId": 50, 
      "valorCuota": 1244.71, 
      "diasRevision": 0, 
      "totalSeguros": 1980, 
      "plazo": 532, 
      "producto": { 
      "moneda": "$", 
      "papel": "$", 
      "otrosConceptos": "", 
      "productoUId": 71, 
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "capital": 10000, 
      "tipoAmortizacionCod": 3, 
      "totalIntereses": 2423.4, 
      "seguros": { 
      "SdtsBTSeguroPrestamo": { 
         "porcentaje": 0, 
         "descripcion": "SANCOR - Vida - Variante 1", 
         "tipo": "VIDA", 
         "importe": 1980, 
         "codigo": 100 
      } 
      }, 
      "fechaValor": "2024-04-10", 
      "tasaEfectiva": 0, 
      "totalImpuestos": 536.29, 
      "coeficienteIVA": 0, 
      "periodicidad": 30, 
      "tasaEfectivaAnual": 23, 
      "totalPrestamo": 14950.84, 
      "fechaVencimiento": "2025-10-02", 
      "tasa": 23, 
      "redondeo": 0, 
      "montoDesembolso": 10000, 
      "comisiones": { 
      "SdtsBTComisionPrestamo": [ 
         { 
            "porcentaje": 0, 
            "descripcion": "Hipotecario - Importe Fijo", 
            "importe": 0, 
            "codigo": 141 
         }, 
         { 
            "porcentaje": 0, 
            "descripcion": "F.H.A.", 
            "importe": 14.3, 
            "codigo": 200 
         } 
      ] 
      }, 
      "totalComisiones": 0, 
      "comisionesCuota": "" 
   },  
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.ObtenerDetalleOfertaAmortizable", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "17:08:56" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
simulacionUId | Long | Identificador único de la simulación. 
clienteUId | Long | Identificador único del cliente. 
cantidadCuotas | Int | Cantidad de cuotas. 
destinoCredito | Long | Destino del credito. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacionOutput | sBTSimulacionOutput  | Datos de la simulación. 

Los campos del tipo de dato estructurado sBTSimulacionOutput son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
cft | Double | Costo financiero total. 
plus | Double | Tasa plus. 
nomSucursal | String | Nombre de la sucursal. 
otrosConceptos | sBTConcepto | Datos de otros conceptos. 
tasaNominalAnual | Double | Tasa nominal anual. 
precio | Double | Precio. 
tipoAmortizacionDsc | String | Descripción del tipo de amortización. 
cronograma | sBTCuotaSimulacion | Cronograma del préstamo. 
comisionesDesembolso | Double | Comisiones de desembolos. 
segurosDesembolso | Double | Seguros de desembolso. 
cantidadCuotas | Int | Cantidad de cuotas. 
impuestosDesembolso | Double | Impuestos de desembolso. 
fechaPrimerPago | Date | Fecha del primer pago. 
operacionUId | Long | Identificador único de la operación. 
valorCuota | Double | Valor de la cuota. 
diasRevision | Int | Días de revisión. 
totalSeguros | Double | Monto total para seguros. 
plazo | Int | Plazo. 
producto | sBTProducto | Datos del producto. 
capital | Double | Capital. 
tipoAmortizacionCod | Byte | Código del tipo de amortización.  
totalIntereses | Double | Total de los intereses. 
seguros | sBTSeguroPrestamo | Listado de seguros. 
fechaValor | Date | Fecha valor. 
tasaEfectiva | Double | Tasa efectiva. 
totalImpuestos | Double | Tasa de los impuestos. 
coeficienteIVA | Double | Coeficiente del IVA. 
periodicidad | Int | Periodicidad. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
totalPrestamo | Double | Total del prestamo. 
fechaVencimiento | Date | Fecha del vencimiento. 
tasa | Double | Tasa. 
redondeo | Double | Redondeo. 
montoDesembolso | Double | Monto del desembolso. 
comisiones | sBTComisionPrestamo | Listado de comisiones. 
totalComisiones | Double | Total de comisiones. 
comisionesCuotas | sBTComisionPrestamo | Listado de comisiones de cuotas. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago. 
tipoCuota | String | Tipo de la cuota (Capital/Interés). 
concepto | String | Concepto. 
capital | Double | Monto de capital en la cuota. 
interes | Double | Monto de intereses en la cuota. 
seguros | Double | Monto de seguros en la cuota. 
impuestos | Double | Monto de impuestos en la cuota. 
otrosConceptos | Double | Importe correspondiente a otros conceptos. 
cuota | Double | Importe total de la cuota. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Int | Codigo del seguro. 
descripcion | String | Descripcion del seguro. 
tipo | String | Tipo del seguro. 
modificable | String | Indica si es modificable. 
importeFijo | Decimal | Importe fijo del seguro. 
porcentaje | Decimal | Porcentaje del seguro. 

Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
porcentaje | Double | Porcentaje de comisión. 
descripcion | String | Descripción de la comisión. 
importe | Double | Importe de la comisión. 
codigo | Int | Código de comisión. 

### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó préstamo para el identificador: [Número de Identificador]. 
30006 | La Fecha para Consultas es anterior a la de la Operación. 
30007 | La Operación no es válida para la Solicitud realizada. 
30008 | La Operación se encuentra cancelada. 

 
