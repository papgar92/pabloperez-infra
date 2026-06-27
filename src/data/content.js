// ─────────────────────────────────────────────────────────────
//  Portfolio INFRAESTRUCTURA / SISTEMAS — contenido bilingüe (ES/EN)
//  Única fuente de verdad.
// ─────────────────────────────────────────────────────────────

export const CONTACT = {
  name: 'Pablo Pérez García',
  email: 'perez.gcia+job@gmail.com',
  phone: '+34681279891',
  phoneDisplay: '+34 681 279 891',
  location: 'Madrid, España',
  github: 'https://github.com/papgar92',
  linkedin: 'https://linkedin.com/in/ppg92',
  cal: 'https://cal.com/papgar92',
  web: 'https://pabloperez-infra.vercel.app/',
  // CV de IT (en public/). Si creas la versión EN, cambia cvEN.
  cvES: '/CV-PPG-IT-ES.pdf',
  cvEN: '/CV-PPG-IT-ES.pdf',
};

// Panel de estado de sistemas (equivalente al feed de alertas del SOC).
// status: 'up' (operativo) | 'guard' (protegiendo) | 'watch' (monitorizando)
export const STATUS = [
  {
    id: 'SYS-AD', sev: 'up',
    es: { title: 'Active Directory · 50+ usuarios', src: 'Cartronic · GPOs, DNS, DHCP', state: 'OPERATIVO',
          detail: 'Administración de dominio Windows Server: usuarios, grupos, GPOs, DNS y DHCP. Altas/bajas, permisos y políticas centralizadas.' },
    en: { title: 'Active Directory · 50+ users', src: 'Cartronic · GPOs, DNS, DHCP', state: 'OPERATIONAL',
          detail: 'Windows Server domain administration: users, groups, GPOs, DNS and DHCP. Onboarding/offboarding, permissions and centralized policies.' },
  },
  {
    id: 'SYS-VIRT', sev: 'up',
    es: { title: 'Virtualización · Proxmox / VMware', src: 'hosts, VMs y contenedores', state: 'OPERATIVO',
          detail: 'Despliegue y mantenimiento de máquinas virtuales y contenedores. Snapshots, recursos y alta disponibilidad de servicios internos.' },
    en: { title: 'Virtualization · Proxmox / VMware', src: 'hosts, VMs & containers', state: 'OPERATIONAL',
          detail: 'Deployment and maintenance of virtual machines and containers. Snapshots, resource allocation and high availability of internal services.' },
  },
  {
    id: 'SYS-FW', sev: 'guard',
    es: { title: 'Firewall perimetral · WatchGuard', src: 'reglas, VPN, segmentación', state: 'PROTEGIENDO',
          detail: 'Gestión de firewall perimetral: reglas, VPN y segmentación de red. Control de tráfico y acceso entre VLANs.' },
    en: { title: 'Perimeter firewall · WatchGuard', src: 'rules, VPN, segmentation', state: 'GUARDING',
          detail: 'Perimeter firewall management: rules, VPN and network segmentation. Traffic control and access between VLANs.' },
  },
  {
    id: 'SYS-MON', sev: 'watch',
    es: { title: 'Monitorización · Nagios / Zabbix', src: 'disponibilidad y alertas', state: 'MONITORIZANDO',
          detail: 'Supervisión de servidores, servicios y dispositivos de red. Alertas proactivas para anticipar caídas antes de que afecten al usuario.' },
    en: { title: 'Monitoring · Nagios / Zabbix', src: 'availability & alerts', state: 'WATCHING',
          detail: 'Monitoring of servers, services and network devices. Proactive alerts to anticipate outages before they reach the user.' },
  },
  {
    id: 'SYS-M365', sev: 'up',
    es: { title: 'Microsoft 365 · Entra ID / Intune', src: 'identidad y dispositivos', state: 'SINCRONIZADO',
          detail: 'Administración de identidades y dispositivos (Entra ID, Intune). Migración On-Premise a Azure AD y despliegue de equipos.' },
    en: { title: 'Microsoft 365 · Entra ID / Intune', src: 'identity & devices', state: 'SYNCED',
          detail: 'Identity and device administration (Entra ID, Intune). On-premise to Azure AD migration and endpoint deployment.' },
  },
];

export const PROJECTS = [
  {
    repo: 'TFG-ASIR',
    url: 'https://github.com/papgar92/TFG-ASIR',
    stack: ['pfSense', 'Snort', 'Nagios', 'Windows Server', 'AD'],
    es: {
      tag: 'Infraestructura segura · TFG',
      desc: 'Diseño e implementación de una red segura para PYME: firewall perimetral (pfSense), IDS, monitorización con Nagios, Active Directory y segmentación de red. Proyecto final del ciclo ASIR.',
    },
    en: {
      tag: 'Secure infrastructure · Final project',
      desc: 'Design and implementation of a secure SME network: perimeter firewall (pfSense), IDS, Nagios monitoring, Active Directory and network segmentation. ASIR final degree project.',
    },
  },
  {
    repo: 'soc-monitoring-lab',
    url: 'https://github.com/papgar92/soc-monitoring-lab',
    stack: ['Proxmox', 'LXC', 'Linux', 'Monitorización'],
    es: {
      tag: 'Home Lab · Virtualización',
      desc: 'Laboratorio propio sobre Proxmox con contenedores LXC: despliegue de servicios, recogida de logs y monitorización de red. Mi banco de pruebas para romper y aprender sin miedo.',
    },
    en: {
      tag: 'Home Lab · Virtualization',
      desc: 'Personal Proxmox lab with LXC containers: service deployment, log collection and network monitoring. My sandbox to break things and learn fearlessly.',
    },
  },
  {
    repo: 'Detector-Fuerza-bruta-SSH',
    url: 'https://github.com/papgar92/Detector-Fuerza-bruta-SSH',
    stack: ['Python', 'Bash', 'auth.log', 'Automatización'],
    es: {
      tag: 'Scripting · Automatización',
      desc: 'Script en Python que analiza logs de autenticación y genera informes automáticos. Ejemplo de cómo automatizo tareas repetitivas de administración con scripting.',
    },
    en: {
      tag: 'Scripting · Automation',
      desc: 'Python script that parses authentication logs and generates automatic reports. An example of how I automate repetitive admin tasks with scripting.',
    },
  },
];

export const SKILLS = [
  { es: 'Sistemas Microsoft', en: 'Microsoft Systems', items: ['Active Directory', 'GPOs', 'Windows Server', 'M365', 'Entra ID', 'Intune'] },
  { es: 'Virtualización', en: 'Virtualization', items: ['Proxmox', 'VMware', 'LXC'] },
  { es: 'Redes / Perímetro', en: 'Networking / Perimeter', items: ['WatchGuard', 'pfSense', 'VLANs', 'Routing', 'VPN'] },
  { es: 'Monitorización', en: 'Monitoring', items: ['Nagios', 'Zabbix', 'Grafana'] },
  { es: 'Scripting / Automatización', en: 'Scripting / Automation', items: ['PowerShell', 'Bash', 'Python'] },
  { es: 'ITSM / Soporte', en: 'ITSM / Support', items: ['Helix ITSM', 'JIRA', 'Salesforce'] },
];

export const CERTS = [
  { name: 'IFCT0410 · Administración de redes', state: 'done' },
  { name: 'IFCT0050 · Ciberseguridad OT', state: 'done' },
  { name: 'IFCT095PO · Python', state: 'done' },
  { name: 'FP Superior · ASIR', state: 'done' },
  { name: 'AZ-900 · Azure Fundamentals', state: 'prog' },
];

export const T = {
  es: {
    role: 'Administrador de Sistemas / Soporte IT',
    feedTitle: 'Estado de sistemas',
    feedSub: 'Monitorización en vivo',
    hookLabel: '// el músculo',
    hook:
      'Experiencia de 8 años en operaciones técnicas de servicio continuo bajo SLA: incidencias, diagnóstico y resolución contrarreloj de sistemas de alarma y videovigilancia. Esa base —método, profesionalidad y orientación al usuario— es la que ahora aplico de lleno a la administración de sistemas.',
    sectionProjects: 'Proyectos',
    sectionProjectsSub: 'Infraestructura real, no diapositivas',
    sectionExp: 'Trayectoria',
    sectionGoal: 'Hacia dónde voy',
    goalText:
      'Mi meta es evolucionar hacia la nube y la automatización (Azure, infraestructura como código). Quiero diseñar sistemas que se mantengan solos, se recuperen solos y dejen de depender de tareas manuales — para que la infraestructura sea fiable de verdad.',
    sectionSkills: 'Stack técnico',
    sectionCerts: 'Formación y ruta',
    expItems: [
      {
        role: 'Técnico de Soporte IT',
        org: 'Cartronic Group',
        period: '2025 – act.',
        desc: 'Administración de infraestructura corporativa: Active Directory (50+ usuarios), GPOs, firewall WatchGuard, virtualización (Proxmox, VMware) y monitorización (Nagios, Zabbix). Soporte N1-N2, M365/Google Workspace y entorno SAP HANA on-premise.',
      },
      {
        role: 'Atención técnica 24/7 · Servicio de seguridad electrónica',
        org: 'Movistar Prosegur Alarmas',
        period: '2017 – 2025',
        desc: 'Gestión de incidencias técnicas bajo SLA en servicio continuo. Diagnóstico remoto de infraestructura IP (cámaras, NVRs, paneles), configuración de red y coordinación con equipos de campo.',
      },
      {
        role: 'Técnico de Soporte IT (Prácticas)',
        org: 'Prosegur Activa',
        period: '2025',
        desc: 'Administración de identidades y dispositivos (Active Directory, Entra ID, Intune). Migración On-Premise a Azure AD, despliegue vía PXE y gestión de tickets bajo SLA en Helix ITSM.',
      },
    ],
    save: 'Guardar contacto',
    schedule: 'Agendar',
    cv: 'CV',
    statusReady: 'todos los sistemas operativos',
  },
  en: {
    role: 'Systems Administrator / IT Support',
    feedTitle: 'Systems status',
    feedSub: 'Live monitoring',
    hookLabel: '// the muscle',
    hook:
      '+8 years of experience in round-the-clock technical operations under an SLA: handling incidents, diagnosing issues, and resolving problems against the clock for alarm and video surveillance systems. It is that foundation—methodology, professionalism, and user-centricity—that now serves as the basis for my approach to systems administration.',
    sectionProjects: 'Projects',
    sectionProjectsSub: 'Real infrastructure, not slides',
    sectionExp: 'Track record',
    sectionGoal: 'Where I am heading',
    goalText:
      'My goal is to evolve towards cloud and automation (Azure, infrastructure as code). I want to design systems that maintain themselves, recover themselves and stop depending on manual tasks — so infrastructure becomes truly reliable.',
    sectionSkills: 'Tech stack',
    sectionCerts: 'Training & path',
    expItems: [
      {
        role: 'IT Support Technician',
        org: 'Cartronic Group',
        period: '2025 – now',
        desc: 'Corporate infrastructure administration: Active Directory (50+ users), GPOs, WatchGuard firewall, virtualization (Proxmox, VMware) and monitoring (Nagios, Zabbix). N1-N2 support, M365/Google Workspace and on-premise SAP HANA.',
      },
      {
        role: '24/7 technical support · Electronic security service',
        org: 'Movistar Prosegur Alarmas',
        period: '2017 – 2025',
        desc: 'SLA-bound technical incident management in continuous service. Remote diagnosis of IP infrastructure (cameras, NVRs, panels), network configuration and coordination with field teams.',
      },
      {
        role: 'IT Support Technician (Internship)',
        org: 'Prosegur Activa',
        period: '2025',
        desc: 'Identity and device administration (Active Directory, Entra ID, Intune). On-premise to Azure AD migration, PXE deployment and SLA-based ticket management in Helix ITSM.',
      },
    ],
    save: 'Save contact',
    schedule: 'Schedule',
    cv: 'CV',
    statusReady: 'all systems operational',
  },
};

export const STATE_LABEL = {
  up: { es: 'OPERATIVO', en: 'OPERATIONAL', color: 'ok' },
  guard: { es: 'PROTEGIENDO', en: 'GUARDING', color: 'info' },
  watch: { es: 'MONITORIZANDO', en: 'WATCHING', color: 'warn' },
};
