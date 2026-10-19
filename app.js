/**
 * Catálogo Oficial y Motor de Cálculo — Oferta Comercial Gayosso
 * Basado en las 29 fuentes del cuaderno "Oferta Comercial para Cotizaciones"
 */

// 1. Ubicaciones de Propiedades (Cementerios y Mausoleos)
const PROPERTY_LOCATIONS = [
  { id: 'NONE', code: '', name: 'Sin Propiedad (Solo Servicios Funerarios)' },
  { id: 'MA01', code: 'MA01', name: 'Mausoleos del Ángel' },
  { id: 'CP20', code: 'CP20', name: 'Cementerio Parque Memorial' },
  { id: 'CC21', code: 'CC21', name: 'Cementerio Los Cipreses' },
  { id: 'MFC1', code: 'MFC1', name: 'Mausoleo Félix Cuevas' },
  { id: 'MLM1', code: 'MLM1', name: 'Mausoleo Lomas Memorial' },
  { id: 'MGM2', code: 'MGM2', name: 'Mausoleo Sullivan (Gayosso México)' },
  { id: 'MSM1', code: 'MSM1', name: 'Mausoleo Santa Mónica' }
];

// 2. Catálogo Completo de Propiedades por Ubicación
// Tipos para Tabla de Contrato Integral:
// 'Capilla' | 'Jardín Privado' | 'Lote T.A y Preferencial' | 'Nicho' | 'Ciprés Ecológico' | 'Gaveta Mural' | 'Sendero Memorial'
const PROPERTIES_CATALOG = [
  // ===================== MA01: MAUSOLEOS DEL ÁNGEL =====================
  {
    id: 'MA01-824949',
    code: '824949',
    locationId: 'MA01',
    rawName: 'PAQ. CAPILLA MODERNA SP 6G 6O',
    displayName: 'Capilla Moderna SP 6G 6O',
    integralType: 'Capilla',
    price: 3086750,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Ubicación Sobre Piso (SP)']
  },
  // Gavetas Mural MA01
  {
    id: 'MA01-826583',
    code: '826583',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL NIV SUPERIOR',
    displayName: 'Gaveta Mural Nivel Superior',
    integralType: 'Gaveta Mural',
    price: 252060,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Superior']
  },
  {
    id: 'MA01-826585',
    code: '826585',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL NIV INFERIOR',
    displayName: 'Gaveta Mural Nivel Inferior',
    integralType: 'Gaveta Mural',
    price: 297600,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Inferior']
  },
  {
    id: 'MA01-826586',
    code: '826586',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL Z PREMIER NIV SUPERIOR',
    displayName: 'Gaveta Mural Zona Premier Nivel Superior',
    integralType: 'Gaveta Mural',
    price: 311205,
    features: ['Capacidad: 1 Gaveta', 'Zona Premier · Nivel Superior']
  },
  {
    id: 'MA01-826584',
    code: '826584',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL NIV MEDIO',
    displayName: 'Gaveta Mural Nivel Medio',
    integralType: 'Gaveta Mural',
    price: 338600,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Medio']
  },
  {
    id: 'MA01-827411',
    code: '827411',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL TRIPLE NIV SUP',
    displayName: 'Gaveta Mural Triple Nivel Superior',
    integralType: 'Gaveta Mural',
    price: 630150,
    features: ['Capacidad: 3 Gavetas', 'Ubicación Nivel Superior']
  },
  {
    id: 'MA01-827413',
    code: '827413',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL TRIPLE NIV INF',
    displayName: 'Gaveta Mural Triple Nivel Inferior',
    integralType: 'Gaveta Mural',
    price: 744000,
    features: ['Capacidad: 3 Gavetas', 'Ubicación Nivel Inferior']
  },
  {
    id: 'MA01-827412',
    code: '827412',
    locationId: 'MA01',
    rawName: 'PAQ. GAVETA MURAL TRIPLE NIV MED',
    displayName: 'Gaveta Mural Triple Nivel Medio',
    integralType: 'Gaveta Mural',
    price: 846500,
    features: ['Capacidad: 3 Gavetas', 'Ubicación Nivel Medio']
  },
  // Nichos MA01
  {
    id: 'MA01-827414',
    code: '827414',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO CHICO MAUSOLEO GABRIEL SUP',
    displayName: 'Nicho Chico Mausoleo Gabriel Nivel Superior',
    integralType: 'Nicho',
    price: 33035,
    features: ['Capacidad: 4 Urnas', 'Mausoleo Gabriel · Nivel Superior']
  },
  {
    id: 'MA01-827434',
    code: '827434',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO CHICO MAUSOLEO MIGUEL SUP',
    displayName: 'Nicho Chico Mausoleo Miguel Nivel Superior',
    integralType: 'Nicho',
    price: 33035,
    features: ['Capacidad: 4 Urnas', 'Mausoleo Miguel · Nivel Superior']
  },
  {
    id: 'MA01-827416',
    code: '827416',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO CHICO MAUSOLEO GABRIEL INF',
    displayName: 'Nicho Chico Mausoleo Gabriel Nivel Inferior',
    integralType: 'Nicho',
    price: 38850,
    features: ['Capacidad: 4 Urnas', 'Mausoleo Gabriel · Nivel Inferior']
  },
  {
    id: 'MA01-827437',
    code: '827437',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO CHICO MAUSOLEO MIGUEL INF',
    displayName: 'Nicho Chico Mausoleo Miguel Nivel Inferior',
    integralType: 'Nicho',
    price: 38850,
    features: ['Capacidad: 4 Urnas', 'Mausoleo Miguel · Nivel Inferior']
  },
  {
    id: 'MA01-827415',
    code: '827415',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO CHICO MAUSOLEO GABRIEL MED',
    displayName: 'Nicho Chico Mausoleo Gabriel Nivel Medio',
    integralType: 'Nicho',
    price: 44580,
    features: ['Capacidad: 4 Urnas', 'Mausoleo Gabriel · Nivel Medio']
  },
  {
    id: 'MA01-827435',
    code: '827435',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO CHICO MAUSOLEO MIGUEL MED',
    displayName: 'Nicho Chico Mausoleo Miguel Nivel Medio',
    integralType: 'Nicho',
    price: 44580,
    features: ['Capacidad: 4 Urnas', 'Mausoleo Miguel · Nivel Medio']
  },
  {
    id: 'MA01-827417',
    code: '827417',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE MAUSOLEO GABRIEL SUP',
    displayName: 'Nicho Grande Mausoleo Gabriel Nivel Superior',
    integralType: 'Nicho',
    price: 66065,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Mausoleo Gabriel · Nivel Superior']
  },
  {
    id: 'MA01-827438',
    code: '827438',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE MAUSOLEO MIGUEL SUP',
    displayName: 'Nicho Grande Mausoleo Miguel Nivel Superior',
    integralType: 'Nicho',
    price: 66065,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Mausoleo Miguel · Nivel Superior']
  },
  {
    id: 'MA01-827419',
    code: '827419',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE MAUSOLEO GABRIEL INF',
    displayName: 'Nicho Grande Mausoleo Gabriel Nivel Inferior',
    integralType: 'Nicho',
    price: 77650,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Mausoleo Gabriel · Nivel Inferior']
  },
  {
    id: 'MA01-827440',
    code: '827440',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE MAUSOLEO MIGUEL INF',
    displayName: 'Nicho Grande Mausoleo Miguel Nivel Inferior',
    integralType: 'Nicho',
    price: 77650,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Mausoleo Miguel · Nivel Inferior']
  },
  {
    id: 'MA01-827430',
    code: '827430',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE CAB MAUS GABRIEL SUP',
    displayName: 'Nicho Grande Cabecera Mausoleo Gabriel Nivel Superior',
    integralType: 'Nicho',
    price: 85850,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Mausoleo Gabriel · Nivel Superior']
  },
  {
    id: 'MA01-827441',
    code: '827441',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE CAB MAUS MIGUEL SUP',
    displayName: 'Nicho Grande Cabecera Mausoleo Miguel Nivel Superior',
    integralType: 'Nicho',
    price: 85850,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Mausoleo Miguel · Nivel Superior']
  },
  {
    id: 'MA01-827418',
    code: '827418',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE MAUSOLEO GABRIEL MED',
    displayName: 'Nicho Grande Mausoleo Gabriel Nivel Medio',
    integralType: 'Nicho',
    price: 89160,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Mausoleo Gabriel · Nivel Medio']
  },
  {
    id: 'MA01-827439',
    code: '827439',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE MAUSOLEO MIGUEL MED',
    displayName: 'Nicho Grande Mausoleo Miguel Nivel Medio',
    integralType: 'Nicho',
    price: 89160,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Mausoleo Miguel · Nivel Medio']
  },
  {
    id: 'MA01-827432',
    code: '827432',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE CAB MAUS GABRIEL INF',
    displayName: 'Nicho Grande Cabecera Mausoleo Gabriel Nivel Inferior',
    integralType: 'Nicho',
    price: 100850,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Mausoleo Gabriel · Nivel Inferior']
  },
  {
    id: 'MA01-827443',
    code: '827443',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE CAB MAUS MIGUEL INF',
    displayName: 'Nicho Grande Cabecera Mausoleo Miguel Nivel Inferior',
    integralType: 'Nicho',
    price: 100850,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Mausoleo Miguel · Nivel Inferior']
  },
  {
    id: 'MA01-827431',
    code: '827431',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE CAB MAUS GABRIEL MED',
    displayName: 'Nicho Grande Cabecera Mausoleo Gabriel Nivel Medio',
    integralType: 'Nicho',
    price: 115850,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Mausoleo Gabriel · Nivel Medio']
  },
  {
    id: 'MA01-827442',
    code: '827442',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO GRANDE CAB MAUS MIGUEL MED',
    displayName: 'Nicho Grande Cabecera Mausoleo Miguel Nivel Medio',
    integralType: 'Nicho',
    price: 115850,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Mausoleo Miguel · Nivel Medio']
  },
  {
    id: 'MA01-827433',
    code: '827433',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO FAMILIAR CAB MAUS GABRIEL MED',
    displayName: 'Nicho Familiar Cabecera Mausoleo Gabriel Nivel Medio',
    integralType: 'Nicho',
    price: 231800,
    features: ['Capacidad Familiar (Cabecera)', 'Mausoleo Gabriel · Nivel Medio']
  },
  {
    id: 'MA01-827444',
    code: '827444',
    locationId: 'MA01',
    rawName: 'PAQ.NICHO FAMILIAR CAB MAUS MIGUEL MED',
    displayName: 'Nicho Familiar Cabecera Mausoleo Miguel Nivel Medio',
    integralType: 'Nicho',
    price: 231800,
    features: ['Capacidad Familiar (Cabecera)', 'Mausoleo Miguel · Nivel Medio']
  },
  // Senderos MA01
  {
    id: 'MA01-826720',
    code: '826720',
    locationId: 'MA01',
    rawName: 'SENDERO MEMORIAL PREMIER NIVEL INFERIOR',
    displayName: 'Sendero Memorial Premier Nivel Inferior',
    integralType: 'Sendero Memorial',
    price: 87460,
    features: ['Sendero Memorial Premier', 'Ubicación Nivel Inferior']
  },
  {
    id: 'MA01-826719',
    code: '826719',
    locationId: 'MA01',
    rawName: 'SENDERO MEMORIAL PREMIER NIVEL MEDIO',
    displayName: 'Sendero Memorial Premier Nivel Medio',
    integralType: 'Sendero Memorial',
    price: 109140,
    features: ['Sendero Memorial Premier', 'Ubicación Nivel Medio']
  },
  {
    id: 'MA01-826718',
    code: '826718',
    locationId: 'MA01',
    rawName: 'SENDERO MEMORIAL PREMIER NIVEL SUPERIOR',
    displayName: 'Sendero Memorial Premier Nivel Superior',
    integralType: 'Sendero Memorial',
    price: 130820,
    features: ['Sendero Memorial Premier', 'Ubicación Nivel Superior']
  },

  // ===================== CP20: CEMENTERIO PARQUE MEMORIAL =====================
  {
    id: 'CP20-CP2026-SP',
    code: 'CP2026',
    locationId: 'CP20',
    rawName: 'PAQ.CAP MODERNA ZONA PREMIER SP 6G6O (2026)',
    displayName: 'Capilla Moderna Zona Premier SP 6G 6O',
    integralType: 'Capilla',
    price: 1950000,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Zona Premier · Sobre Piso (SP)']
  },
  {
    id: 'CP20-CP2026-BP',
    code: 'CP2026',
    locationId: 'CP20',
    rawName: 'PAQ.CAP MODERNA ZONA PREMIER BP 6G6O (2026)',
    displayName: 'Capilla Moderna Zona Premier BP 6G 6O',
    integralType: 'Capilla',
    price: 2150000,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Zona Premier · Bajo Piso (BP)']
  },
  {
    id: 'CP20-825035',
    code: '825035',
    locationId: 'CP20',
    rawName: 'PAQ. CAPILLA CLASICA SP 6G 6O',
    displayName: 'Capilla Clásica SP 6G 6O',
    integralType: 'Capilla',
    price: 828375,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Sobre Piso (SP)']
  },
  {
    id: 'CP20-825041',
    code: '825041',
    locationId: 'CP20',
    rawName: 'PAQ. CAPILLA PREMIER SP 6G 6O',
    displayName: 'Capilla Premier SP 6G 6O',
    integralType: 'Capilla',
    price: 887545,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Sobre Piso (SP)']
  },
  {
    id: 'CP20-825793',
    code: '825793',
    locationId: 'CP20',
    rawName: 'PAQ. CAPILLA PREMIER BP 6G 6O',
    displayName: 'Capilla Premier BP 6G 6O',
    integralType: 'Capilla',
    price: 1141595,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Bajo Piso (BP)']
  },
  {
    id: 'CP20-827063',
    code: '827063',
    locationId: 'CP20',
    rawName: 'PAQ. GAVETA MURAL NIVEL SUPERIOR',
    displayName: 'Gaveta Mural Nivel Superior',
    integralType: 'Gaveta Mural',
    price: 71365,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Superior']
  },
  {
    id: 'CP20-827064',
    code: '827064',
    locationId: 'CP20',
    rawName: 'PAQ. GAVETA MURAL NIVEL MEDIO',
    displayName: 'Gaveta Mural Nivel Medio',
    integralType: 'Gaveta Mural',
    price: 81940,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Medio']
  },
  {
    id: 'CP20-826553',
    code: '826553',
    locationId: 'CP20',
    rawName: 'PAQ. GAVETA MURAL PREFERENCIAL SUP',
    displayName: 'Gaveta Mural Preferencial Nivel Superior',
    integralType: 'Gaveta Mural',
    price: 84685,
    features: ['Capacidad: 1 Gaveta', 'Preferencial · Nivel Superior']
  },
  {
    id: 'CP20-826555',
    code: '826555',
    locationId: 'CP20',
    rawName: 'PAQ. GAVETA MURAL PREFERENCIAL INF',
    displayName: 'Gaveta Mural Preferencial Nivel Inferior',
    integralType: 'Gaveta Mural',
    price: 97230,
    features: ['Capacidad: 1 Gaveta', 'Preferencial · Nivel Inferior']
  },
  {
    id: 'CP20-826554',
    code: '826554',
    locationId: 'CP20',
    rawName: 'PAQ. GAVETA MURAL PREFERENCIAL MED',
    displayName: 'Gaveta Mural Preferencial Nivel Medio',
    integralType: 'Gaveta Mural',
    price: 109780,
    features: ['Capacidad: 1 Gaveta', 'Preferencial · Nivel Medio']
  },
  {
    id: 'CP20-827066',
    code: '827066',
    locationId: 'CP20',
    rawName: 'PAQ. GAVETA MURAL DOBLE INFERIOR',
    displayName: 'Gaveta Mural Doble Nivel Inferior',
    integralType: 'Gaveta Mural',
    price: 163880,
    features: ['Capacidad: 2 Gavetas', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CP20-824925',
    code: '824925',
    locationId: 'CP20',
    rawName: 'PAQ. JARDIN PRIVADO 4G 4OS',
    displayName: 'Jardín Privado 4G 4OS',
    integralType: 'Jardín Privado',
    price: 407430,
    features: ['Capacidad: 4 Gavetas y 4 Osarios', 'Jardín Privado']
  },
  {
    id: 'CP20-826110',
    code: '826110',
    locationId: 'CP20',
    rawName: 'PAQ. JARDIN FAMILIAR 6G 6OS',
    displayName: 'Jardín Familiar 6G 6OS',
    integralType: 'Jardín Privado',
    price: 610690,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Jardín Familiar']
  },
  {
    id: 'CP20-824927',
    code: '824927',
    locationId: 'CP20',
    rawName: 'PAQ. 4 GAVETAS T.A.',
    displayName: 'Lote 4 Gavetas T.A.',
    integralType: 'Lote T.A y Preferencial',
    price: 68465,
    features: ['Capacidad: 4 Gavetas', 'Lote Tradicional (T.A.)']
  },
  {
    id: 'CP20-826878',
    code: '826878',
    locationId: 'CP20',
    rawName: 'PAQ. 4 GAVETAS PREFERENCIAL',
    displayName: 'Lote 4 Gavetas Preferencial',
    integralType: 'Lote T.A y Preferencial',
    price: 298940,
    features: ['Capacidad: 4 Gavetas', 'Ubicación Preferencial']
  },
  {
    id: 'CP20-826879',
    code: '826879',
    locationId: 'CP20',
    rawName: 'PAQ. NICHO CHICO SUP',
    displayName: 'Nicho Chico Nivel Superior',
    integralType: 'Nicho',
    price: 53725,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Superior']
  },
  {
    id: 'CP20-826921',
    code: '826921',
    locationId: 'CP20',
    rawName: 'PAQ. NICHO CHICO INF',
    displayName: 'Nicho Chico Nivel Inferior',
    integralType: 'Nicho',
    price: 66125,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CP20-826920',
    code: '826920',
    locationId: 'CP20',
    rawName: 'PAQ. NICHO CHICO MED',
    displayName: 'Nicho Chico Nivel Medio',
    integralType: 'Nicho',
    price: 78525,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Medio']
  },
  {
    id: 'CP20-826922',
    code: '826922',
    locationId: 'CP20',
    rawName: 'PAQ. NICHO FAMILIAR SUP',
    displayName: 'Nicho Familiar Nivel Superior',
    integralType: 'Nicho',
    price: 134315,
    features: ['Capacidad Familiar', 'Ubicación Nivel Superior']
  },
  {
    id: 'CP20-826924',
    code: '826924',
    locationId: 'CP20',
    rawName: 'PAQ. NICHO FAMILIAR INF',
    displayName: 'Nicho Familiar Nivel Inferior',
    integralType: 'Nicho',
    price: 165310,
    features: ['Capacidad Familiar', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CP20-826923',
    code: '826923',
    locationId: 'CP20',
    rawName: 'PAQ. NICHO FAMILIAR MED',
    displayName: 'Nicho Familiar Nivel Medio',
    integralType: 'Nicho',
    price: 196310,
    features: ['Capacidad Familiar', 'Ubicación Nivel Medio']
  },
  {
    id: 'CP20-826699',
    code: '826699',
    locationId: 'CP20',
    rawName: 'SENDERO MEMORIAL NIVEL INFERIOR',
    displayName: 'Sendero Memorial Nivel Inferior',
    integralType: 'Sendero Memorial',
    price: 67280,
    features: ['Sendero Memorial', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CP20-826698',
    code: '826698',
    locationId: 'CP20',
    rawName: 'SENDERO MEMORIAL NIVEL MEDIO',
    displayName: 'Sendero Memorial Nivel Medio',
    integralType: 'Sendero Memorial',
    price: 83955,
    features: ['Sendero Memorial', 'Ubicación Nivel Medio']
  },
  {
    id: 'CP20-826697',
    code: '826697',
    locationId: 'CP20',
    rawName: 'SENDERO MEMORIAL NIVEL SUPERIOR',
    displayName: 'Sendero Memorial Nivel Superior',
    integralType: 'Sendero Memorial',
    price: 100630,
    features: ['Sendero Memorial', 'Ubicación Nivel Superior']
  },

  // ===================== CC21: CEMENTERIO LOS CIPRESES =====================
  {
    id: 'CC21-826230',
    code: '826230',
    locationId: 'CC21',
    rawName: 'PAQ.CAPILLA PREMIER PREFERENCIAL SP 6G6O',
    displayName: 'Capilla Premier Preferencial SP 6G 6O',
    integralType: 'Capilla',
    price: 1153050,
    features: ['Capacidad: 6 Gavetas y 6 Osarios', 'Preferencial · Sobre Piso (SP)']
  },
  {
    id: 'CC21-826254',
    code: '826254',
    locationId: 'CC21',
    rawName: 'PAQ. GAVETA MURAL NIVEL SUPERIOR',
    displayName: 'Gaveta Mural Nivel Superior',
    integralType: 'Gaveta Mural',
    price: 51000,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Superior']
  },
  {
    id: 'CC21-826256',
    code: '826256',
    locationId: 'CC21',
    rawName: 'PAQ. GAVETA MURAL NIVEL INFERIOR',
    displayName: 'Gaveta Mural Nivel Inferior',
    integralType: 'Gaveta Mural',
    price: 61710,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CC21-826255',
    code: '826255',
    locationId: 'CC21',
    rawName: 'PAQ. GAVETA MURAL NIVEL MEDIO',
    displayName: 'Gaveta Mural Nivel Medio',
    integralType: 'Gaveta Mural',
    price: 72420,
    features: ['Capacidad: 1 Gaveta', 'Ubicación Nivel Medio']
  },
  {
    id: 'CC21-824942',
    code: '824942',
    locationId: 'CC21',
    rawName: 'PAQ. JARDIN PRIVADO 4G 4OS',
    displayName: 'Jardín Privado 4G 4OS',
    integralType: 'Jardín Privado',
    price: 407430,
    features: ['Capacidad: 4 Gavetas y 4 Osarios', 'Jardín Privado']
  },
  {
    id: 'CC21-825738',
    code: '825738',
    locationId: 'CC21',
    rawName: 'PAQ. 4 GAVETAS PREFERENCIAL',
    displayName: 'Lote 4 Gavetas Preferencial',
    integralType: 'Lote T.A y Preferencial',
    price: 136795,
    features: ['Capacidad: 4 Gavetas', 'Ubicación Preferencial']
  },
  {
    id: 'CC21-826251',
    code: '826251',
    locationId: 'CC21',
    rawName: 'PAQ. NICHO CHICO CEM NIVEL SUPERIOR',
    displayName: 'Nicho Chico Cementerio Nivel Superior',
    integralType: 'Nicho',
    price: 52415,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Superior']
  },
  {
    id: 'CC21-826253',
    code: '826253',
    locationId: 'CC21',
    rawName: 'PAQ. NICHO CHICO CEM NIVEL INFERIOR',
    displayName: 'Nicho Chico Cementerio Nivel Inferior',
    integralType: 'Nicho',
    price: 62900,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CC21-826252',
    code: '826252',
    locationId: 'CC21',
    rawName: 'PAQ. NICHO CHICO CEM NIVEL MEDIO',
    displayName: 'Nicho Chico Cementerio Nivel Medio',
    integralType: 'Nicho',
    price: 75130,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Medio']
  },
  {
    id: 'CC21-826705',
    code: '826705',
    locationId: 'CC21',
    rawName: 'SENDERO MEMORIAL NIVEL INFERIOR',
    displayName: 'Sendero Memorial Nivel Inferior',
    integralType: 'Sendero Memorial',
    price: 67280,
    features: ['Sendero Memorial', 'Ubicación Nivel Inferior']
  },
  {
    id: 'CC21-826704',
    code: '826704',
    locationId: 'CC21',
    rawName: 'SENDERO MEMORIAL NIVEL MEDIO',
    displayName: 'Sendero Memorial Nivel Medio',
    integralType: 'Sendero Memorial',
    price: 83955,
    features: ['Sendero Memorial', 'Ubicación Nivel Medio']
  },
  {
    id: 'CC21-826703',
    code: '826703',
    locationId: 'CC21',
    rawName: 'SENDERO MEMORIAL NIVEL SUPERIOR',
    displayName: 'Sendero Memorial Nivel Superior',
    integralType: 'Sendero Memorial',
    price: 100630,
    features: ['Sendero Memorial', 'Ubicación Nivel Superior']
  },

  // ===================== MFC1: MAUSOLEO FÉLIX CUEVAS =====================
  {
    id: 'MFC1-822366',
    code: '822366',
    locationId: 'MFC1',
    rawName: 'PAQ. NICHO CHICO ZONA PREMIER NIV.SUP/I',
    displayName: 'Nicho Chico Zona Premier Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 59495,
    features: ['Capacidad: 4 Urnas', 'Zona Premier · Nivel Sup/Inf']
  },
  {
    id: 'MFC1-822364',
    code: '822364',
    locationId: 'MFC1',
    rawName: 'PAQ. NICHO CHICO ZONA CAPILLA NIV. SUP/I',
    displayName: 'Nicho Chico Zona Capilla Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 84995,
    features: ['Capacidad: 4 Urnas', 'Zona Capilla · Nivel Sup/Inf']
  },
  {
    id: 'MFC1-822368',
    code: '822368',
    locationId: 'MFC1',
    rawName: 'PAQ. NICHO CHICO ZONA CAPILLA NIV.MEDIO',
    displayName: 'Nicho Chico Zona Capilla Nivel Medio',
    integralType: 'Nicho',
    price: 114750,
    features: ['Capacidad: 4 Urnas', 'Zona Capilla · Nivel Medio']
  },
  {
    id: 'MFC1-825739',
    code: '825739',
    locationId: 'MFC1',
    rawName: 'PAQ.NICHO GRANDE CAB. ZONA PREMIER S/I',
    displayName: 'Nicho Grande Cabecera Zona Premier Nivel Sup/Inf',
    integralType: 'Nicho',
    price: 154690,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Zona Premier · Nivel Sup/Inf']
  },
  {
    id: 'MFC1-821854',
    code: '821854',
    locationId: 'MFC1',
    rawName: 'PAQ.NICHO GRANDE ZONA CAPILLA NIV. SUP/I',
    displayName: 'Nicho Grande Zona Capilla Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 170000,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Zona Capilla · Nivel Sup/Inf']
  },
  {
    id: 'MFC1-821853',
    code: '821853',
    locationId: 'MFC1',
    rawName: 'PAQ. NICHO GRANDE ZONA CAPILLA NIV.MEDIO',
    displayName: 'Nicho Grande Zona Capilla Nivel Medio',
    integralType: 'Nicho',
    price: 229495,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Zona Capilla · Nivel Medio']
  },

  // ===================== MLM1: MAUSOLEO LOMAS MEMORIAL =====================
  {
    id: 'MLM1-827238',
    code: '827238',
    locationId: 'MLM1',
    rawName: 'PAQ.NICHO CHICO ZONA JPII NIV SUP/IN',
    displayName: 'Nicho Chico Zona JPII Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 120185,
    features: ['Capacidad: 4 Urnas', 'Zona Juan Pablo II · Nivel Sup/Inf']
  },
  {
    id: 'MLM1-827239',
    code: '827239',
    locationId: 'MLM1',
    rawName: 'PAQ.NICHO CHICO ZONA JPII NIV MEDIO',
    displayName: 'Nicho Chico Zona JPII Nivel Medio',
    integralType: 'Nicho',
    price: 137915,
    features: ['Capacidad: 4 Urnas', 'Zona Juan Pablo II · Nivel Medio']
  },
  {
    id: 'MLM1-827235',
    code: '827235',
    locationId: 'MLM1',
    rawName: 'PAQ.NICHO CHICO ZONA PREMIER NIV.SUP/IN',
    displayName: 'Nicho Chico Zona Premier Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 145005,
    features: ['Capacidad: 4 Urnas', 'Zona Premier · Nivel Sup/Inf']
  },
  {
    id: 'MLM1-827236',
    code: '827236',
    locationId: 'MLM1',
    rawName: 'PAQ.NICHO CHICO ZONA PREMIER NIV. MEDIO',
    displayName: 'Nicho Chico Zona Premier Nivel Medio',
    integralType: 'Nicho',
    price: 166275,
    features: ['Capacidad: 4 Urnas', 'Zona Premier · Nivel Medio']
  },

  // ===================== MGM2: MAUSOLEO SULLIVAN =====================
  {
    id: 'MGM2-823074',
    code: '823074',
    locationId: 'MGM2',
    rawName: 'PAQ.NICHO CHICO ZONA MAUSOLEO NIV.SUP/IN',
    displayName: 'Nicho Chico Zona Mausoleo Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 25430,
    features: ['Capacidad: 4 Urnas', 'Zona Mausoleo · Nivel Sup/Inf']
  },
  {
    id: 'MGM2-823080',
    code: '823080',
    locationId: 'MGM2',
    rawName: 'PAQ.NICHO CHICO ZONA MAUSOLEO NIV. MEDIO',
    displayName: 'Nicho Chico Zona Mausoleo Nivel Medio',
    integralType: 'Nicho',
    price: 34335,
    features: ['Capacidad: 4 Urnas', 'Zona Mausoleo · Nivel Medio']
  },
  {
    id: 'MGM2-824600',
    code: '824600',
    locationId: 'MGM2',
    rawName: 'PAQ. NICHO INDIVIDUAL ZONA CAPILLA SUP/INF',
    displayName: 'Nicho Individual Zona Capilla Nivel Sup/Inf',
    integralType: 'Nicho',
    price: 50860,
    features: ['Capacidad: 1 Urna', 'Zona Capilla · Nivel Sup/Inf']
  },
  {
    id: 'MGM2-823075',
    code: '823075',
    locationId: 'MGM2',
    rawName: 'PAQ.NICHOGRANDE ZONA MAUSOLEO NIV.SUP/IN',
    displayName: 'Nicho Grande Zona Mausoleo Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 50860,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Zona Mausoleo · Nivel Sup/Inf']
  },
  {
    id: 'MGM2-823563',
    code: '823563',
    locationId: 'MGM2',
    rawName: 'PAQ.NICHO GRANDE CABECERA MAUSOLEO S/I',
    displayName: 'Nicho Grande Cabecera Mausoleo Nivel Sup/Inf',
    integralType: 'Nicho',
    price: 66120,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Zona Mausoleo · Nivel Sup/Inf']
  },
  {
    id: 'MGM2-823081',
    code: '823081',
    locationId: 'MGM2',
    rawName: 'PAQ.NICHO GRANDE ZONA MAUSOLEO NIV.MEDIO',
    displayName: 'Nicho Grande Zona Mausoleo Nivel Medio',
    integralType: 'Nicho',
    price: 68655,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Zona Mausoleo · Nivel Medio']
  },
  {
    id: 'MGM2-823551',
    code: '823551',
    locationId: 'MGM2',
    rawName: 'PAQ.NICHO GRANDE CABECERA MAUSOLEO MED',
    displayName: 'Nicho Grande Cabecera Mausoleo Nivel Medio',
    integralType: 'Nicho',
    price: 89265,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Zona Mausoleo · Nivel Medio']
  },
  {
    id: 'MGM2-824602',
    code: '824602',
    locationId: 'MGM2',
    rawName: 'PAQ. NICHO CHICO ZONA CAPILLA SUP/INF',
    displayName: 'Nicho Chico Zona Capilla Nivel Superior/Inferior',
    integralType: 'Nicho',
    price: 101720,
    features: ['Capacidad: 4 Urnas', 'Zona Capilla · Nivel Sup/Inf']
  },
  {
    id: 'MGM2-824603',
    code: '824603',
    locationId: 'MGM2',
    rawName: 'PAQ. NICHO CHICO ZONA CAPILLA MEDIO',
    displayName: 'Nicho Chico Zona Capilla Nivel Medio',
    integralType: 'Nicho',
    price: 137320,
    features: ['Capacidad: 4 Urnas', 'Zona Capilla · Nivel Medio']
  },

  // ===================== MSM1: MAUSOLEO SANTA MÓNICA =====================
  {
    id: 'MSM1-NC-SUP',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO CHICO NIVEL SUPERIOR (MSM1)',
    displayName: 'Nicho Chico Nivel Superior',
    integralType: 'Nicho',
    price: 42500,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Superior']
  },
  {
    id: 'MSM1-NC-MED',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO CHICO NIVEL MEDIO (MSM1)',
    displayName: 'Nicho Chico Nivel Medio',
    integralType: 'Nicho',
    price: 57400,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Medio']
  },
  {
    id: 'MSM1-NC-INF',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO CHICO NIVEL INFERIOR (MSM1)',
    displayName: 'Nicho Chico Nivel Inferior',
    integralType: 'Nicho',
    price: 49900,
    features: ['Capacidad: 4 Urnas', 'Ubicación Nivel Inferior']
  },
  {
    id: 'MSM1-NG-SUP',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO GRANDE NIVEL SUPERIOR (MSM1)',
    displayName: 'Nicho Grande Nivel Superior',
    integralType: 'Nicho',
    price: 85000,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Ubicación Nivel Superior']
  },
  {
    id: 'MSM1-NG-MED',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO GRANDE NIVEL MEDIO (MSM1)',
    displayName: 'Nicho Grande Nivel Medio',
    integralType: 'Nicho',
    price: 114800,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Ubicación Nivel Medio']
  },
  {
    id: 'MSM1-NG-INF',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO GRANDE NIVEL INFERIOR (MSM1)',
    displayName: 'Nicho Grande Nivel Inferior',
    integralType: 'Nicho',
    price: 99900,
    features: ['Capacidad: 4 Urnas (Nicho Grande)', 'Ubicación Nivel Inferior']
  },
  {
    id: 'MSM1-NGC-SUP',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO GRANDE CABECERA NIVEL SUPERIOR (MSM1)',
    displayName: 'Nicho Grande Cabecera Nivel Superior',
    integralType: 'Nicho',
    price: 110500,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Ubicación Nivel Superior']
  },
  {
    id: 'MSM1-NGC-MED',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO GRANDE CABECERA NIVEL MEDIO (MSM1)',
    displayName: 'Nicho Grande Cabecera Nivel Medio',
    integralType: 'Nicho',
    price: 149200,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Ubicación Nivel Medio']
  },
  {
    id: 'MSM1-NGC-INF',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO GRANDE CABECERA NIVEL INFERIOR (MSM1)',
    displayName: 'Nicho Grande Cabecera Nivel Inferior',
    integralType: 'Nicho',
    price: 129800,
    features: ['Capacidad: 4 Urnas (Cabecera)', 'Ubicación Nivel Inferior']
  },
  {
    id: 'MSM1-NFC-SUP',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO FAMILIAR CABECERA NIVEL SUPERIOR (MSM1)',
    displayName: 'Nicho Familiar Cabecera Nivel Superior',
    integralType: 'Nicho',
    price: 221000,
    features: ['Capacidad Familiar (Cabecera)', 'Ubicación Nivel Superior']
  },
  {
    id: 'MSM1-NFC-MED',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO FAMILIAR CABECERA NIVEL MEDIO (MSM1)',
    displayName: 'Nicho Familiar Cabecera Nivel Medio',
    integralType: 'Nicho',
    price: 298400,
    features: ['Capacidad Familiar (Cabecera)', 'Ubicación Nivel Medio']
  },
  {
    id: 'MSM1-NFC-INF',
    code: 'MSM1',
    locationId: 'MSM1',
    rawName: 'NICHO FAMILIAR CABECERA NIVEL INFERIOR (MSM1)',
    displayName: 'Nicho Familiar Cabecera Nivel Inferior',
    integralType: 'Nicho',
    price: 259700,
    features: ['Capacidad Familiar (Cabecera)', 'Ubicación Nivel Inferior']
  }
];

// 3. Agencias Funerarias y Precios por Tipo de Agencia
const AGENCY_PRICES_BY_TIER = {
  C: { ESENCIAL: 43900, UNIVERSAL: 56600, PREMIER: 74800 },
  B: { ESENCIAL: 46000, UNIVERSAL: 59400, PREMIER: 78500 },
  A: { ESENCIAL: 48300, UNIVERSAL: 62300, PREMIER: 82300 },
  AA: { ESENCIAL: 50600, UNIVERSAL: 65300, PREMIER: 86300 }
};

const FUNERAL_AGENCIES = [
  // Principales con clave oficial (Valle de México / Cuernavaca)
  { id: 'FS05', code: 'FS05', name: 'Agencia Santa Mónica', tier: 'B', group: 'Valle de México y Centro' },
  { id: 'FS06', code: 'FS06', name: 'Agencia Sullivan', tier: 'B', group: 'Valle de México y Centro' },
  { id: 'FF04', code: 'FF04', name: 'Agencia Félix Cuevas', tier: 'AA', group: 'Valle de México y Centro' },
  { id: 'FS09', code: 'FS09', name: 'Agencia Lomas Memorial', tier: 'AA', group: 'Valle de México y Centro', premierRecommended: true },
  { id: 'MA02', code: 'MA02', name: 'Agencia Mausoleos del Ángel', tier: 'C', group: 'Valle de México y Centro' },
  { id: 'GJTM', code: 'GJTM', name: 'Agencia Jardines del Tiempo (Colima)', tier: 'C', group: 'Valle de México y Centro' },
  { id: 'FC03', code: 'FC03', name: 'Agencia Cuernavaca', tier: 'C', group: 'Valle de México y Centro' },
  // Otras plazas nacionales de la tabla Oferta Comercial
  { id: 'GDLC', code: 'GDLC', name: 'Agencia Gdl - El Carmen', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'LEOF', code: 'LEOF', name: 'Agencia León - Francisco Villa', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'MTYM', code: 'MTYM', name: 'Agencia Mty - Marianas', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'MTYN', code: 'MTYN', name: 'Agencia Mty - Nogalar', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'MXLL', code: 'MXLL', name: 'Agencia Mxl - López Mateos', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'TIJR', code: 'TIJR', name: 'Agencia Tij - El Río', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'TORP', code: 'TORP', name: 'Agencia Tor - Periférico', tier: 'A', group: 'Plazas Nacionales (Agencias A)' },
  { id: 'AGSC', code: 'AGSC', name: 'Agencia Aguascalientes', tier: 'B', group: 'Plazas Nacionales (Agencias B)' },
  { id: 'MORE', code: 'MORE', name: 'Agencia Morelia', tier: 'B', group: 'Plazas Nacionales (Agencias B)' },
  { id: 'REYN', code: 'REYN', name: 'Agencia Reynosa', tier: 'B', group: 'Plazas Nacionales (Agencias B)' },
  { id: 'ACAP', code: 'ACAP', name: 'Agencia Acapulco', tier: 'C', group: 'Plazas Nacionales (Agencias C)' },
  { id: 'IRAP', code: 'IRAP', name: 'Agencia Irapuato', tier: 'C', group: 'Plazas Nacionales (Agencias C)' },
  { id: 'MXLM', code: 'MXLM', name: 'Agencia Mxl - Madero', tier: 'C', group: 'Plazas Nacionales (Agencias C)' },
  { id: 'TORA', code: 'TORA', name: 'Agencia Tor - Allende', tier: 'C', group: 'Plazas Nacionales (Agencias C)' },
  { id: 'GDLV', code: 'GDLV', name: 'Agencia Gdl - Vallarta', tier: 'C', group: 'Plazas Nacionales (Agencias C)' },
  { id: 'LEOL', code: 'LEOL', name: 'Agencia León - López Mateos', tier: 'C', group: 'Plazas Nacionales (Agencias C)' },
  { id: 'TIJS', code: 'TIJS', name: 'Agencia Tij - Santa Gema', tier: 'C', group: 'Plazas Nacionales (Agencias C)' }
];

// 4. Categorías de Servicios Funerarios
const SERVICE_CATEGORIES = {
  ESENCIAL: {
    id: 'ESENCIAL',
    code: '826881',
    singularTitle: '1 Servicio Esencial Pro',
    pluralTitle: 'Servicios Esencial Pro',
    getFeatures: () => [
      'Ataúd metal - Cat. Esencial',
      'Sala Estándar',
      'Embalsamado',
      'Arreglo estético',
      'Cafetería básica Gayosso',
      'Paq. ambivalente (Inhumación o Cremación)'
    ]
  },
  UNIVERSAL: {
    id: 'UNIVERSAL',
    code: '826884',
    singularTitle: '1 Servicio Universal Pro',
    pluralTitle: 'Servicios Universal Pro',
    getFeatures: () => [
      'Ataúd metal o madera',
      'Sala Estándar Universal',
      'Embalsamado básico',
      'Arreglo estético',
      'Cafetería Gayosso',
      'Paq. ambivalente (Inhumación o Cremación)'
    ]
  },
  PREMIER: {
    id: 'PREMIER',
    code: '826888',
    singularTitle: '1 Servicio Premier Pro',
    pluralTitle: 'Servicios Premier Pro',
    getFeatures: (agencyTier) => {
      const base = [
        'Ataúd lujo metal o madera - Cat. Premier',
        'Servicio funerario - Sala Premier',
        'Embalsamado y arreglo estético',
        'Cafetería básica Gayosso',
        'Paq. ambivalente (Inhumación o Cremación)'
      ];
      if (agencyTier === 'AA') {
        base.push('Paq. multiplaza');
      }
      base.push('Copia acta de defunción');
      return base;
    }
  }
};

// 5. Tablas Oficiales de Descuento Comercial
// 5a. Contratos Integrales (Propiedad + 1 a 4 SF)
const INTEGRAL_DISCOUNTS = {
  'Capilla': { 1: 0.03, 2: 0.05, 3: 0.06, 4: 0.07 },
  'Jardín Privado': { 1: 0.07, 2: 0.09, 3: 0.11, 4: 0.12 },
  'Lote T.A y Preferencial': { 1: 0.10, 2: 0.20, 3: 0.20, 4: 0.25 },
  'Nicho': { 1: 0.15, 2: 0.25, 3: 0.25, 4: 0.30 },
  'Ciprés Ecológico': { 1: 0.15, 2: 0.25, 3: 0.25, 4: 0.30 },
  'Gaveta Mural': { 1: 0.20, 2: 0.30, 3: 0.30, 4: 0.35 },
  'Sendero Memorial': { 1: 0.20, 2: 0.30, 3: 0.30, 4: 0.35 }
};

// 5b. Descuento Comercial Servicios Individuales (Sin Propiedad)
const INDIVIDUAL_SERVICE_DISCOUNTS = {
  PREMIER: { 1: 0.20, 2: 0.25, 3: 0.3333, 4: 0.30 },
  UNIVERSAL: { 1: 0.20, 2: 0.25, 3: 0.3333, 4: 0.30 },
  ESENCIAL: { 1: 0.15, 2: 0.20, 3: 0.20, 4: 0.20 }
};

// 6. Formas de Pago (11 Claves Oficiales del CSV)
const PAYMENT_METHODS = [
  {
    code: 'D036',
    discount: 0.08,
    months: 36,
    type: 'monthly',
    flexibleDownpayment: false,
    fixedDownpayment: 0,
    shortLabel: () => 'Crédito 36 Mensualidades',
    periodLabel: 'Mensualidad'
  },
  {
    code: 'DD36',
    discount: 0.03,
    months: 36,
    type: 'monthly',
    flexibleDownpayment: false,
    fixedDownpayment: 0,
    shortLabel: () => 'Débito 36 Mensualidades',
    periodLabel: 'Mensualidad'
  },
  {
    code: 'D035',
    discount: 0.15,
    months: 35,
    type: 'downpayment',
    flexibleDownpayment: true,
    fixedDownpayment: 0.15,
    shortLabel: (dpPct) => `Enganche ${dpPct}% (35 Meses)`,
    periodLabel: 'Mensualidad'
  },
  {
    code: 'D024',
    discount: 0.15,
    months: 24,
    type: 'downpayment',
    flexibleDownpayment: true,
    fixedDownpayment: 0.15,
    shortLabel: (dpPct) => `Enganche ${dpPct}% (24 Meses)`,
    periodLabel: 'Mensualidad'
  },
  {
    code: 'D012',
    discount: 0.15,
    months: 12,
    type: 'downpayment',
    flexibleDownpayment: true,
    fixedDownpayment: 0.15,
    shortLabel: (dpPct) => `Enganche ${dpPct}% (12 Meses)`,
    periodLabel: 'Mensualidad'
  },
  {
    code: 'D020',
    discount: 0.15,
    months: 35,
    type: 'downpayment',
    flexibleDownpayment: false,
    fixedDownpayment: 0.20,
    shortLabel: () => 'Enganche 20% (35 Meses)',
    periodLabel: 'Mensualidad'
  },
  {
    code: 'DD35',
    discount: 0.15,
    months: 35,
    type: 'downpayment',
    flexibleDownpayment: true,
    fixedDownpayment: 0.15,
    shortLabel: (dpPct) => `Enganche ${dpPct}% Débito (35 Meses)`,
    periodLabel: 'Mensualidad'
  },
  {
    code: 'DD24',
    discount: 0.15,
    months: 24,
    type: 'downpayment',
    flexibleDownpayment: true,
    fixedDownpayment: 0.15,
    shortLabel: (dpPct) => `Enganche ${dpPct}% Débito (24 Meses)`,
    periodLabel: 'Mensualidad'
  },
  {
    code: 'DD12',
    discount: 0.15,
    months: 12,
    type: 'downpayment',
    flexibleDownpayment: true,
    fixedDownpayment: 0.15,
    shortLabel: (dpPct) => `Enganche ${dpPct}% Débito (12 Meses)`,
    periodLabel: 'Mensualidad'
  },
  {
    code: 'P001',
    discount: 0.20,
    months: 1,
    type: 'cash',
    flexibleDownpayment: false,
    fixedDownpayment: 0,
    shortLabel: () => 'Pago de Contado',
    periodLabel: 'Única Exhibición',
    footerNote: 'Posibilidad de diferir hasta en 3 exhibiciones.'
  },
  {
    code: 'P003',
    discount: 0.20,
    months: 3,
    type: 'cash_flex',
    flexibleDownpayment: false,
    fixedDownpayment: 0,
    shortLabel: () => 'Contado Flex (3 Exhibiciones)',
    periodLabel: '3 Exhibiciones de',
    footerNote: 'Precio de contado liquidando en 3 exhibiciones.'
  }
];

// Estado Inicial (Replica el ejemplo de "Diseño Definitivo de la pagina.txt")
const state = {
  locationId: 'MSM1',
  propertyTypeFilter: 'ALL',
  propertyId: 'MSM1-NC-MED',
  serviceQty: 2,
  serviceCategoryId: 'UNIVERSAL',
  agencyId: 'FS05',
  selectedPayments: ['D036', 'D035', 'P001'],
  recommendedPaymentCode: 'P001',
  downpaymentPercent: 15, // 15% a 70%
  extraSecretDiscountPct: 0, // Descuento adicional oculto en cascada (%)
  isMobileMode: false,
  mobileStep: 1, // 1: Propiedad, 2: Servicios, 3: Opciones de Pago
  mobilePhase: 1 // 1: Menú de selección por pasos, 2: Vista de Cotización
};

// Utilidad de formato de moneda
function formatMoney(amount) {
  return amount.toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Inicialización del DOM
document.addEventListener('DOMContentLoaded', () => {
  initDates();
  initControls();
  initMobileWizard();
  detectDeviceMode();
  renderAll();
  setupCaptureActions();
});

/**
 * Detecta automáticamente si se abre en navegador de Celular o Computadora
 * y adapta el modo visual sin alterar la lógica del cotizador.
 */
function isMobileBrowser() {
  const uaMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent || ''
  );
  const narrowViewport = window.matchMedia('(max-width: 899px)').matches;
  return uaMobile || narrowViewport;
}

function detectDeviceMode() {
  const mobileDetected = isMobileBrowser();
  state.isMobileMode = mobileDetected;
  const body = document.body;

  if (mobileDetected) {
    body.classList.remove('is-desktop');
    body.classList.add('is-mobile');
    applyMobilePhaseAndStep();
  } else {
    body.classList.remove('is-mobile', 'mobile-phase-1', 'mobile-phase-2');
    body.classList.add('is-desktop');
  }
}

function setMobileStep(stepNumber) {
  state.mobileStep = Math.min(3, Math.max(1, stepNumber));
  applyMobilePhaseAndStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setMobilePhase(phaseNumber) {
  state.mobilePhase = phaseNumber === 2 ? 2 : 1;
  applyMobilePhaseAndStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyMobilePhaseAndStep() {
  const body = document.body;
  if (!state.isMobileMode) return;

  body.classList.toggle('mobile-phase-1', state.mobilePhase === 1);
  body.classList.toggle('mobile-phase-2', state.mobilePhase === 2);

  // Actualizar tarjetas activas según el paso actual (1, 2 o 3)
  document.querySelectorAll('.config-card[data-step]').forEach((card) => {
    const step = parseInt(card.dataset.step, 10);
    card.classList.toggle('active-mobile-step', step === state.mobileStep);
  });

  // Actualizar indicadores de progreso (Stepper superior)
  document.querySelectorAll('.mobile-step-indicator[data-step-indicator]').forEach((ind) => {
    const step = parseInt(ind.dataset.stepIndicator, 10);
    ind.classList.toggle('active', step === state.mobileStep);
    ind.classList.toggle('completed', step < state.mobileStep);
  });

  document.querySelectorAll('.step-connector[data-connector]').forEach((conn) => {
    const connIndex = parseInt(conn.dataset.connector, 10);
    conn.classList.toggle('completed', state.mobileStep > connIndex);
  });

  // Mostrar la barra de descuento extra en el paso 3 en móvil
  const summaryBar = document.getElementById('advisorSummaryBar');
  if (summaryBar) {
    summaryBar.classList.toggle('visible-on-step-3', state.mobileStep === 3);
  }
}

function initMobileWizard() {
  // Botones "Siguiente"
  document.querySelectorAll('[data-next-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.dataset.nextStep, 10);
      setMobileStep(nextStep);
    });
  });

  // Botones "Anterior"
  document.querySelectorAll('[data-prev-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.dataset.prevStep, 10);
      setMobileStep(prevStep);
    });
  });

  // Permitir tocar los círculos del stepper en móvil para cambiar de paso
  document.querySelectorAll('.mobile-step-indicator[data-step-indicator]').forEach((ind) => {
    ind.style.cursor = 'pointer';
    ind.addEventListener('click', () => {
      if (!state.isMobileMode) return;
      const targetStep = parseInt(ind.dataset.stepIndicator, 10);
      setMobileStep(targetStep);
    });
  });

  // Botón "Cotizar" (Pasa de Fase 1 a Fase 2: Vista de Cotización)
  const mobileQuoteBtn = document.getElementById('mobileQuoteBtn');
  if (mobileQuoteBtn) {
    mobileQuoteBtn.addEventListener('click', () => {
      renderAll();
      setMobilePhase(2);
    });
  }

  // Botones "Regresar para cotizar algo nuevo" / "Cotizar algo nuevo" (Regresa a Fase 1, Paso 1)
  const resetToNewQuote = () => {
    setMobileStep(1);
    setMobilePhase(1);
  };

  const topBackBtn = document.getElementById('mobileNewQuoteTopBtn');
  const bottomBackBtn = document.getElementById('mobileNewQuoteBottomBtn');
  if (topBackBtn) topBackBtn.addEventListener('click', resetToNewQuote);
  if (bottomBackBtn) bottomBackBtn.addEventListener('click', resetToNewQuote);

  // Escuchar cambios de tamaño de ventana / orientación
  window.addEventListener('resize', () => {
    const wasMobile = state.isMobileMode;
    const nowMobile = isMobileBrowser();
    if (wasMobile !== nowMobile) {
      detectDeviceMode();
    }
  });
}

function initDates() {
  const today = new Date();
  const optionsMonthYear = { month: 'long', year: 'numeric' };
  const monthYearStr = today.toLocaleDateString('es-MX', optionsMonthYear);

  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const optionsFullDate = { day: 'numeric', month: 'long', year: 'numeric' };
  const lastDayStr = lastDayOfMonth.toLocaleDateString('es-MX', optionsFullDate);

  document.getElementById('current-month-year').textContent = monthYearStr;
  document.getElementById('end-of-month').textContent = lastDayStr;
}

function initControls() {
  // 1. Poblar selector de Ubicación (Cementerio / Mausoleo)
  const locationSelect = document.getElementById('locationSelect');
  locationSelect.innerHTML = PROPERTY_LOCATIONS.map(
    (loc) => `<option value="${loc.id}">${loc.code ? `[${loc.code}] ` : ''}${loc.name}</option>`
  ).join('');
  locationSelect.value = state.locationId;

  locationSelect.addEventListener('change', (e) => {
    state.locationId = e.target.value;
    state.propertyTypeFilter = 'ALL';
    populatePropertyTypes();
    populatePropertiesList(true);
    renderAll();
  });

  // 2. Filtro por tipo de propiedad
  const propertyTypeSelect = document.getElementById('propertyTypeSelect');
  propertyTypeSelect.addEventListener('change', (e) => {
    state.propertyTypeFilter = e.target.value;
    populatePropertiesList(true);
    renderAll();
  });

  // 3. Selector de Propiedad
  const propertySelect = document.getElementById('propertySelect');
  propertySelect.addEventListener('change', (e) => {
    state.propertyId = e.target.value;
    renderAll();
  });

  // 4. Botones de cantidad de servicios (0 a 4)
  const qtyButtons = document.querySelectorAll('.qty-btn');
  qtyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const qty = parseInt(btn.dataset.qty, 10);
      // Evitar que tanto Propiedad como Servicio queden vacíos al mismo tiempo
      if (qty === 0 && state.locationId === 'NONE') {
        state.locationId = 'MSM1';
        locationSelect.value = 'MSM1';
        populatePropertyTypes();
        populatePropertiesList(true);
      }
      state.serviceQty = qty;
      renderAll();
    });
  });

  // 5. Selector de Categoría de Servicio
  const serviceCategorySelect = document.getElementById('serviceCategorySelect');
  serviceCategorySelect.value = state.serviceCategoryId;
  serviceCategorySelect.addEventListener('change', (e) => {
    state.serviceCategoryId = e.target.value;
    renderAll();
  });

  // 6. Selector de Agencia Funeraria
  const agencySelect = document.getElementById('agencySelect');
  const groups = {};
  FUNERAL_AGENCIES.forEach((ag) => {
    if (!groups[ag.group]) groups[ag.group] = [];
    groups[ag.group].push(ag);
  });
  agencySelect.innerHTML = Object.entries(groups)
    .map(
      ([groupName, list]) =>
        `<optgroup label="${groupName}">` +
        list
          .map(
            (ag) =>
              `<option value="${ag.id}">[${ag.code}] ${ag.name} (Tipo ${ag.tier})</option>`
          )
          .join('') +
        `</optgroup>`
    )
    .join('');
  agencySelect.value = state.agencyId;

  agencySelect.addEventListener('change', (e) => {
    state.agencyId = e.target.value;
    renderAll();
  });

  // 7. Control deslizable e input de Enganche (15% a 70%)
  const dpRange = document.getElementById('downpaymentRange');
  const dpInput = document.getElementById('downpaymentInput');

  dpRange.addEventListener('input', (e) => {
    const val = Math.min(70, Math.max(15, parseInt(e.target.value, 10) || 15));
    state.downpaymentPercent = val;
    dpInput.value = val;
    renderAll();
  });

  dpInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    val = Math.min(70, Math.max(15, val));
    state.downpaymentPercent = val;
    dpRange.value = val;
    renderAll();
  });

  // 8. Selector de Tarjeta Recomendada
  const recommendedSelect = document.getElementById('recommendedSelect');
  recommendedSelect.addEventListener('change', (e) => {
    state.recommendedPaymentCode = e.target.value;
    renderAll();
  });

  // 9. Descuento adicional oculto (%)
  const extraDiscountInput = document.getElementById('extraDiscountInput');
  extraDiscountInput.addEventListener('input', (e) => {
    const val = Math.max(0, Math.min(50, parseFloat(e.target.value) || 0));
    state.extraSecretDiscountPct = val;
    renderAll();
  });

  // 10. Botón mostrar/ocultar panel configurador
  const toggleBtn = document.getElementById('toggleConfigBtn');
  const configBody = document.getElementById('configuratorBody');
  toggleBtn.addEventListener('click', () => {
    const isCollapsed = configBody.classList.toggle('collapsed');
    toggleBtn.textContent = isCollapsed ? 'Mostrar Configurador' : 'Ocultar Configurador';
  });

  populatePropertyTypes();
  populatePropertiesList(false);
  renderPaymentCheckboxes();
}

function populatePropertyTypes() {
  const propertyTypeSelect = document.getElementById('propertyTypeSelect');
  if (state.locationId === 'NONE') {
    propertyTypeSelect.innerHTML = '<option value="ALL">Sin propiedad seleccionada</option>';
    propertyTypeSelect.disabled = true;
    return;
  }

  propertyTypeSelect.disabled = false;
  const propsInLoc = PROPERTIES_CATALOG.filter((p) => p.locationId === state.locationId);
  const uniqueTypes = [...new Set(propsInLoc.map((p) => p.integralType))];

  propertyTypeSelect.innerHTML =
    `<option value="ALL">Todos los tipos (${propsInLoc.length})</option>` +
    uniqueTypes.map((t) => `<option value="${t}">${t}</option>`).join('');
  propertyTypeSelect.value = state.propertyTypeFilter;
}

function populatePropertiesList(autoSelectFirst) {
  const propertySelect = document.getElementById('propertySelect');
  if (state.locationId === 'NONE') {
    propertySelect.innerHTML = '<option value="">— Solo Servicios Funerarios —</option>';
    propertySelect.disabled = true;
    state.propertyId = '';
    return;
  }

  propertySelect.disabled = false;
  let filtered = PROPERTIES_CATALOG.filter((p) => p.locationId === state.locationId);
  if (state.propertyTypeFilter !== 'ALL') {
    filtered = filtered.filter((p) => p.integralType === state.propertyTypeFilter);
  }

  propertySelect.innerHTML = filtered
    .map(
      (p) =>
        `<option value="${p.id}">[${p.code}] ${p.displayName} — $${formatMoney(p.price)}</option>`
    )
    .join('');

  if (autoSelectFirst || !filtered.some((p) => p.id === state.propertyId)) {
    state.propertyId = filtered.length > 0 ? filtered[0].id : '';
  }
  propertySelect.value = state.propertyId;
}

function renderPaymentCheckboxes() {
  const container = document.getElementById('paymentCheckboxesContainer');
  container.innerHTML = PAYMENT_METHODS.map((pm) => {
    const isChecked = state.selectedPayments.includes(pm.code);
    const labelText = pm.shortLabel(state.downpaymentPercent);
    const discPct = Math.round(pm.discount * 100);
    return `
      <label class="payment-option-item ${isChecked ? 'selected' : ''}" data-code="${pm.code}">
        <div class="payment-option-left">
          <input type="checkbox" value="${pm.code}" ${isChecked ? 'checked' : ''} />
          <span class="payment-code-tag">${pm.code}</span>
          <span class="payment-desc-tag">${labelText}</span>
        </div>
        <span class="payment-discount-badge">-${discPct}%</span>
      </label>
    `;
  }).join('');

  container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const code = e.target.value;
      if (e.target.checked) {
        if (state.selectedPayments.length >= 3) {
          e.target.checked = false;
          alert('Puedes seleccionar hasta un máximo de 3 formas de pago simultáneas para comparar en la cotización.');
          return;
        }
        state.selectedPayments.push(code);
      } else {
        if (state.selectedPayments.length <= 1) {
          e.target.checked = true;
          return;
        }
        state.selectedPayments = state.selectedPayments.filter((c) => c !== code);
      }
      renderPaymentCheckboxes();
      renderAll();
    });
  });
}

/**
 * Calcula los montos y descuentos en cascada según las reglas oficiales del cuaderno:
 * 1. Suma de Precio de Lista (Propiedad + Servicios)
 * 2. Descuento por Forma de Pago (sobre el total de lista)
 * 3. Descuento Comercial (Contrato Integral o Servicios Individuales, sobre el subtotal tras forma de pago)
 * 4. Descuento Extra Oculto opcional (en cascada sobre el subtotal resultante)
 */
function calculateQuotationData() {
  const hasProperty = state.locationId !== 'NONE' && !!state.propertyId;
  const property = hasProperty ? PROPERTIES_CATALOG.find((p) => p.id === state.propertyId) : null;
  const location = hasProperty ? PROPERTY_LOCATIONS.find((l) => l.id === state.locationId) : null;

  const hasService = state.serviceQty > 0;
  const agency = FUNERAL_AGENCIES.find((a) => a.id === state.agencyId);
  const serviceCategory = SERVICE_CATEGORIES[state.serviceCategoryId];

  const propertyListPrice = property ? property.price : 0;
  const singleServiceListPrice =
    hasService && agency ? AGENCY_PRICES_BY_TIER[agency.tier][state.serviceCategoryId] : 0;
  const totalServiceListPrice = singleServiceListPrice * state.serviceQty;
  const combinedListPrice = propertyListPrice + totalServiceListPrice;

  // Condición Promoción 3x2 (Únicamente 3 Servicios Individuales Universal Pro o Premier Pro con 33.33% de descuento)
  const isEligibleCategoryFor3x2 =
    state.serviceQty === 3 &&
    (state.serviceCategoryId === 'UNIVERSAL' || state.serviceCategoryId === 'PREMIER');
  const isPromo3x2 = !hasProperty && isEligibleCategoryFor3x2;

  // Determinar porcentaje de Descuento de Oferta Comercial
  let commercialDiscountRate = 0;
  let commercialDiscountLabel = 'Sin Descuento Comercial (0%)';

  if (hasProperty && hasService) {
    // Contrato Integral
    const tableForProp = INTEGRAL_DISCOUNTS[property.integralType] || {};
    commercialDiscountRate = tableForProp[state.serviceQty] || 0;
    commercialDiscountLabel = `Contrato Integral (${property.integralType} + ${state.serviceQty} SF): -${(
      commercialDiscountRate * 100
    ).toFixed(0)}%`;
  } else if (!hasProperty && hasService) {
    // Servicios Individuales
    const tableForServ = INDIVIDUAL_SERVICE_DISCOUNTS[state.serviceCategoryId] || {};
    commercialDiscountRate = tableForServ[state.serviceQty] || 0;
    const pctStr =
      commercialDiscountRate === 0.3333 ? '33.33%' : `${(commercialDiscountRate * 100).toFixed(0)}%`;
    if (isPromo3x2) {
      commercialDiscountLabel = `Promoción 3x2 (3 SF ${state.serviceCategoryId}): -${pctStr} (Compra 2 y lleva 3)`;
    } else {
      commercialDiscountLabel = `Servicios Individuales (${state.serviceQty} SF ${state.serviceCategoryId}): -${pctStr}`;
    }
  } else if (hasProperty && !hasService) {
    commercialDiscountRate = 0;
    commercialDiscountLabel = 'Solo Propiedad (0% Descuento Integral)';
  }

  const extraSecretRate = (state.extraSecretDiscountPct || 0) / 100;

  // Calcular cada forma de pago seleccionada en orden
  const paymentBreakdowns = state.selectedPayments.map((code) => {
    const pm = PAYMENT_METHODS.find((m) => m.code === code);
    const afterPaymentDiscount = combinedListPrice * (1 - pm.discount);
    const afterCommercialDiscount = afterPaymentDiscount * (1 - commercialDiscountRate);
    const finalTotal = afterCommercialDiscount * (1 - extraSecretRate);

    let downpaymentAmount = 0;
    let monthlyPayment = 0;
    const effectiveDpPct = pm.flexibleDownpayment
      ? state.downpaymentPercent / 100
      : pm.fixedDownpayment;

    if (pm.type === 'monthly') {
      monthlyPayment = finalTotal / pm.months;
    } else if (pm.type === 'downpayment') {
      downpaymentAmount = finalTotal * effectiveDpPct;
      const remainingToFinance = finalTotal - downpaymentAmount;
      monthlyPayment = remainingToFinance / pm.months;
    } else if (pm.type === 'cash') {
      monthlyPayment = finalTotal;
    } else if (pm.type === 'cash_flex') {
      monthlyPayment = finalTotal / 3;
    }

    return {
      pm,
      finalTotal,
      downpaymentAmount,
      monthlyPayment,
      effectiveDpPct: Math.round(effectiveDpPct * 100)
    };
  });

  return {
    hasProperty,
    property,
    location,
    hasService,
    agency,
    serviceCategory,
    propertyListPrice,
    singleServiceListPrice,
    totalServiceListPrice,
    combinedListPrice,
    commercialDiscountRate,
    commercialDiscountLabel,
    isPromo3x2,
    isEligibleCategoryFor3x2,
    paymentBreakdowns
  };
}

function renderAll() {
  // Actualizar estado visual de botones de cantidad de servicios
  const isCat3x2 =
    state.serviceCategoryId === 'UNIVERSAL' || state.serviceCategoryId === 'PREMIER';
  document.querySelectorAll('.qty-btn').forEach((btn) => {
    const qty = parseInt(btn.dataset.qty, 10);
    btn.classList.toggle('active', qty === state.serviceQty);
    if (qty === 3) {
      btn.textContent = isCat3x2 && state.locationId === 'NONE' ? '3 SF (3x2)' : '3 SF';
    }
  });

  const serviceCategorySelect = document.getElementById('serviceCategorySelect');
  const agencySelect = document.getElementById('agencySelect');
  serviceCategorySelect.disabled = state.serviceQty === 0;
  agencySelect.disabled = state.serviceQty === 0;

  // Mostrar/ocultar control deslizable de enganche según si hay un plan con enganche flexible activo
  const hasFlexibleDpSelected = state.selectedPayments.some((code) => {
    const pm = PAYMENT_METHODS.find((m) => m.code === code);
    return pm && pm.flexibleDownpayment;
  });
  const dpBox = document.getElementById('downpaymentControlBox');
  dpBox.style.display = hasFlexibleDpSelected ? 'flex' : 'none';

  // Actualizar etiquetas en la lista de checkboxes si cambió el % de enganche
  document.querySelectorAll('.payment-option-item').forEach((item) => {
    const code = item.dataset.code;
    const pm = PAYMENT_METHODS.find((m) => m.code === code);
    if (pm && pm.flexibleDownpayment) {
      const descSpan = item.querySelector('.payment-desc-tag');
      if (descSpan) descSpan.textContent = pm.shortLabel(state.downpaymentPercent);
    }
  });

  // Actualizar opciones del selector "Destacar como Recomendado"
  const recommendedSelect = document.getElementById('recommendedSelect');
  if (!state.selectedPayments.includes(state.recommendedPaymentCode) && state.recommendedPaymentCode !== 'NONE') {
    state.recommendedPaymentCode = state.selectedPayments.includes('P001')
      ? 'P001'
      : state.selectedPayments[state.selectedPayments.length - 1];
  }
  recommendedSelect.innerHTML =
    `<option value="NONE">Ninguna tarjeta destacada</option>` +
    state.selectedPayments
      .map((code) => `<option value="${code}">Destacar ${code} como Recomendado</option>`)
      .join('');
  recommendedSelect.value = state.recommendedPaymentCode;

  // Calcular datos de la cotización
  const data = calculateQuotationData();

  // Mostrar aviso contextual de Promoción 3x2 en el Paso 2 del configurador
  const promoNoticeEl = document.getElementById('promo3x2Notice');
  if (promoNoticeEl) {
    if (data.isPromo3x2 && data.serviceCategory) {
      promoNoticeEl.style.display = 'block';
      promoNoticeEl.innerHTML = `
        <strong>✓ Promoción 3x2 Aplicada (-33.33%):</strong> En la cotización el cliente verá que adquiere <strong>2 ${data.serviceCategory.pluralTitle}</strong> y recibe <strong>1 servicio más sin costo</strong> (3 servicios en total).
      `;
    } else if (data.isEligibleCategoryFor3x2 && data.hasProperty && data.serviceCategory) {
      promoNoticeEl.style.display = 'block';
      promoNoticeEl.innerHTML = `
        <strong>💡 Promoción 3x2 (-33.33%):</strong> Aplica en Servicios Individuales (sin propiedad).
        <div style="margin-top: 0.4rem;">
          <button type="button" id="switchTo3x2OnlyBtn" style="background: #1C5560; color: #ffffff; border: none; border-radius: 0.35rem; padding: 0.35rem 0.65rem; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
            Cambiar a Solo 3 Servicios (Activar 3x2)
          </button>
        </div>
      `;
      const switchBtn = document.getElementById('switchTo3x2OnlyBtn');
      if (switchBtn) {
        switchBtn.addEventListener('click', () => {
          state.locationId = 'NONE';
          state.propertyTypeFilter = 'ALL';
          const locationSelect = document.getElementById('locationSelect');
          if (locationSelect) locationSelect.value = 'NONE';
          populatePropertyTypes();
          populatePropertiesList(true);
          renderAll();
        });
      }
    } else {
      promoNoticeEl.style.display = 'none';
      promoNoticeEl.innerHTML = '';
    }
  }

  // Actualizar barra de resumen para el asesor
  document.getElementById('summaryPropPrice').textContent = `$${formatMoney(data.propertyListPrice)}`;
  document.getElementById('summaryServPrice').textContent = `$${formatMoney(data.totalServiceListPrice)}`;
  document.getElementById('summaryTotalList').textContent = `$${formatMoney(data.combinedListPrice)}`;
  document.getElementById('summaryCommercialRule').textContent = data.commercialDiscountLabel;

  // Renderizar Encabezado de la Cotización
  const subtitleEl = document.getElementById('quotePlanSubtitle');
  const codeEl = document.getElementById('quoteHeaderCode');

  const codesArray = [];
  if (data.hasProperty && data.location) {
    codesArray.push(data.location.code);
  }
  if (data.hasService && data.agency) {
    codesArray.push(data.agency.code);
  }
  codeEl.textContent = `Cód: ${codesArray.join(' / ')}`;

  if (data.hasProperty && data.hasService) {
    subtitleEl.textContent = 'Plan Integral de Previsión';
  } else if (data.hasProperty) {
    subtitleEl.textContent = 'Propiedad de Descanso Final';
  } else if (data.isPromo3x2) {
    subtitleEl.textContent = 'Plan de Previsión Funeraria · Promoción 3x2';
  } else {
    subtitleEl.textContent = 'Plan de Previsión Funeraria';
  }

  // Renderizar Sección "Detalle del Plan"
  const detailsGrid = document.getElementById('planDetailsGrid');
  detailsGrid.className = `plan-details-grid ${
    data.hasProperty && data.hasService ? 'cols-2' : 'cols-1'
  }`;

  let detailsHtml = '';

  if (data.hasProperty && data.property && data.location) {
    const propFeaturesHtml = data.property.features.map((f) => `<li>${f}</li>`).join('');
    detailsHtml += `
      <div class="detail-card">
        <div class="detail-card-top-row">
          <h3 class="detail-card-category">Propiedad</h3>
        </div>
        <p class="detail-card-name">${data.property.displayName}</p>
        <p class="detail-card-location">${data.location.name} (${data.location.code})</p>
        <ul class="detail-features-list">
          ${propFeaturesHtml}
        </ul>
      </div>
    `;
  }

  if (data.hasService && data.serviceCategory && data.agency) {
    const serviceFeatures = data.serviceCategory.getFeatures(data.agency.tier);
    const servFeaturesHtml = serviceFeatures.map((f) => `<li>${f}</li>`).join('');

    if (data.isPromo3x2) {
      detailsHtml += `
        <div class="detail-card promo-3x2-card">
          <div class="detail-card-top-row">
            <h3 class="detail-card-category">Servicios Funerarios</h3>
            <span class="detail-promo-3x2-badge">Promoción 3x2 · Paga 2 y Lleva 3</span>
          </div>
          <p class="detail-card-name">
            2 ${data.serviceCategory.pluralTitle} + <span class="detail-card-name-highlight">1 Servicio Adicional Sin Costo</span>
          </p>
          <p class="detail-card-location">${data.agency.name} (${data.agency.code})</p>
          <div class="promo-3x2-banner">
            <strong>Beneficio 3x2 Aplicado:</strong> Por la compra de <strong>2 ${data.serviceCategory.pluralTitle}</strong>, te llevas <strong>1 Servicio adicional sin costo</strong> (Total: <strong>3 ${data.serviceCategory.pluralTitle}</strong> incluidos).
          </div>
          <ul class="detail-features-list two-cols">
            ${servFeaturesHtml}
          </ul>
        </div>
      `;
    } else {
      const serviceTitle =
        state.serviceQty === 1
          ? data.serviceCategory.singularTitle
          : `${state.serviceQty} ${data.serviceCategory.pluralTitle}`;

      detailsHtml += `
        <div class="detail-card">
          <div class="detail-card-top-row">
            <h3 class="detail-card-category">Servicios Funerarios</h3>
          </div>
          <p class="detail-card-name">${serviceTitle}</p>
          <p class="detail-card-location">${data.agency.name} (${data.agency.code})</p>
          <ul class="detail-features-list two-cols">
            ${servFeaturesHtml}
          </ul>
        </div>
      `;
    }
  }

  detailsGrid.innerHTML = detailsHtml;

  // Renderizar Sección "Opciones de Pago"
  const paymentsGrid = document.getElementById('paymentCardsGrid');
  const numCols = data.paymentBreakdowns.length;
  paymentsGrid.className = `payment-cards-grid cols-${numCols}`;

  paymentsGrid.innerHTML = data.paymentBreakdowns
    .map((item) => {
      const { pm, finalTotal, downpaymentAmount, monthlyPayment, effectiveDpPct } = item;
      const isRecommended = state.recommendedPaymentCode === pm.code;
      const subtitle = pm.shortLabel(effectiveDpPct);

      let bottomHtml = '';
      if (pm.type === 'monthly') {
        bottomHtml = `<p class="payment-total-line">Total: $${formatMoney(finalTotal)}</p>`;
      } else if (pm.type === 'downpayment') {
        bottomHtml = `
          <p class="payment-downpayment-line">Enganche: $${formatMoney(downpaymentAmount)}</p>
          <p class="payment-total-line">Total: $${formatMoney(finalTotal)}</p>
        `;
      } else if (pm.type === 'cash') {
        bottomHtml = `<p class="payment-note-line">${pm.footerNote}</p>`;
      } else if (pm.type === 'cash_flex') {
        bottomHtml = `<p class="payment-total-line">Total: $${formatMoney(finalTotal)}</p>`;
      }

      return `
        <div class="payment-card ${isRecommended ? 'recommended' : ''}">
          ${isRecommended ? '<div class="recommended-badge">Recomendado</div>' : ''}
          <div class="payment-card-top">
            <h3 class="payment-card-code">${pm.code}</h3>
            <p class="payment-card-subtitle">${subtitle}</p>
            <div class="payment-amount-row">
              <span class="payment-currency-symbol">$</span>
              <span class="payment-main-figure">${formatMoney(monthlyPayment)}</span>
            </div>
            <p class="payment-period-label">${pm.periodLabel}</p>
          </div>
          <div class="payment-card-bottom">
            ${bottomHtml}
          </div>
        </div>
      `;
    })
    .join('');
}

function setupCaptureActions() {
  const captureBtn = document.getElementById('captureBtn');
  const printBtn = document.getElementById('printBtn');

  captureBtn.addEventListener('click', function () {
    const container = document.getElementById('quotation-container');
    const originalBtnHtml = this.innerHTML;

    this.innerHTML = '<span>Procesando...</span>';

    const codes = [];
    if (state.locationId !== 'NONE') codes.push(state.locationId);
    if (state.serviceQty > 0) codes.push(state.agencyId);
    const filename = `Cotizacion_Gayosso_${codes.join('_') || 'Plan'}.png`;

    html2canvas(container, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true
    })
      .then((canvas) => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const link = document.createElement('a');
        link.download = filename;
        link.href = image;
        link.click();

        this.innerHTML = originalBtnHtml;
      })
      .catch((err) => {
        console.error('Error al generar captura:', err);
        this.innerHTML = '<span>Error al exportar</span>';
        setTimeout(() => {
          this.innerHTML = originalBtnHtml;
        }, 2000);
      });
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });
}
