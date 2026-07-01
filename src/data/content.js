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

  cvES: '/CV-PPG-IT-ES.pdf',
  cvEN: '/CV-PPG-IT-EN.pdf',
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
    repo: 'Backup-Ubuntu-Server-Windows-server',
    url: 'https://github.com/papgar92/Backup-Ubuntu-Server-Windows-server',
    stack: ['Bash', 'CIFS/SMB', 'Cron', 'Ubuntu', 'Windows Server'],
    es: {
      tag: 'Automatización · Backups',
      desc: 'Script Bash en producción que automatiza la copia de seguridad de Ubuntu a un Windows Server de dominio vía CIFS/SMB. Montaje automático de la unidad de red, rotación (mantiene solo la copia más reciente), credenciales protegidas (chmod 600) y ejecución diaria por cron con logs para auditoría.',
    },
    en: {
      tag: 'Automation · Backups',
      desc: 'Production-ready Bash script that automates backups from Ubuntu to a domain Windows Server over CIFS/SMB. Automatic network-drive mounting, rotation (keeps only the latest copy), secured credentials (chmod 600) and daily cron execution with audit logs.',
    },
  },
];

export const SKILLS = [
  { es: 'Microsoft', en: 'Microsoft', items: ['Active Directory', 'GPOs', 'Windows Server', 'M365', 'Entra ID', 'Intune'] },
  { es: 'Sistemas operativos', en: 'Operating systems', items: ['Debian', 'Ubuntu', 'SUSE'] },
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
      'Experiencia de 9 años en operaciones técnicas de servicio continuo bajo SLA: incidencias, diagnóstico y resolución contrarreloj de sistemas de alarma y videovigilancia. Esa base —método, profesionalidad y orientación al usuario— es la que ahora aplico de lleno a la administración de sistemas.',
    sectionProjects: 'Proyectos',
    sectionProjectsSub: 'Infraestructura real, no diapositivas',
    sectionExp: 'Trayectoria',
    sectionGoal: 'Hacia dónde voy',
    goalText:
      'Mi objetivo es especializarme en cloud, sobre todo en el ecosistema Microsoft Azure. Actualmente gestiono infraestructura on-premise y quiero dar el salto a gestionar infraestructura en cloud, automatizando lo repetitivo para dedicar el tiempo a lo que de verdad aporta.',
    sectionSkills: 'Stack técnico',
    sectionCerts: 'Formación y ruta',
    expItems: [
      {
        role: 'Técnico de Soporte IT',
        org: 'Cartronic Group',
        period: '2025 – act.',
        desc: 'Administración de infraestructura corporativa: Active Directory (50+ usuarios), GPOs, firewall WatchGuard, virtualización (Proxmox, VMware) y monitorización (Nagios, Zabbix). Soporte N1-N2 sobre M365 y Google Workspace. Desarrollo y mantenimiento del entorno SAP B1/HANA: queries, procedures, integración con componentes .NET y testing de APIs con Postman.',
      },
      {
        role: 'Atención técnica 24/7 · Servicio de seguridad electrónica',
        org: 'Movistar Prosegur Alarmas',
        period: '2017 – 2025',
        desc: 'Gestión de incidencias técnicas bajo SLA en servicio continuo. Diagnóstico remoto de infraestructura IP (cámaras, NVRs, paneles), configuración de red y coordinación con equipos de campo. Rol reconocido de referente informático de turno para el equipo, con resolución diaria de incidencias de red, ofimática, AD y aplicaciones internas.',
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
      '+9 years of experience in round-the-clock technical operations under SLA: handling incidents, diagnosing issues, and resolving problems against the clock for alarm and video surveillance systems. It is that foundation—methodology, professionalism, and user-centricity—that now serves as the basis for my approach to systems administration.',
    sectionProjects: 'Projects',
    sectionProjectsSub: 'Real infrastructure, not slides',
    sectionExp: 'Track record',
    sectionGoal: 'Where I am heading',
    goalText:
      'My goal is to specialise in cloud, especially the Microsoft Azure ecosystem. Nowadays I manage on-premise infrastructure and want to make the leap to managing cloud, automating the repetitive so I can focus on what really matters.',
    sectionSkills: 'Tech stack',
    sectionCerts: 'Training & path',
    expItems: [
      {
        role: 'IT Support Technician',
        org: 'Cartronic Group',
        period: '2025 – now',
        desc: 'Corporate infrastructure administration: Active Directory (50+ users), GPOs, WatchGuard firewall, virtualization (Proxmox, VMware) and monitoring (Nagios, Zabbix). N1-N2 support on M365 and Google Workspace. Development and maintenance of the SAP B1/HANA environment: queries, procedures, integration with .NET components and API testing with Postman.',
      },
      {
        role: '24/7 technical support · Electronic security service',
        org: 'Movistar Prosegur Alarmas',
        period: '2017 – 2025',
        desc: 'SLA-bound technical incident management in continuous service. Remote diagnosis of IP infrastructure (cameras, NVRs, panels), network configuration and coordination with field teams. Recognized role as go-to IT reference within the shift, handling daily incidents on networking, office software, AD and internal applications.',
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
  watch: { es: 'MONITORIZANDO', en: 'WATCHING', color: 'watching' },
};
