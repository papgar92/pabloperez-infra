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
  cal: '', // 'https://cal.com/papgar92' — desactivado: sin búsqueda activa
  web: 'https://pabloperez-infra.vercel.app/',
};

// Panel de estado de sistemas (equivalente al feed de alertas del SOC).
// status: 'up' (operativo) | 'guard' (protegiendo) | 'watch' (monitorizando)
export const STATUS = [
  {
    id: 'SYS-AD', sev: 'up',
    es: { title: 'Active Directory · Entra ID', src: 'multisede · GPOs, DNS, DHCP', state: 'OPERATIVO',
          detail: 'Dominio on-premise e identidad en la nube para una organización con tres sedes: usuarios, grupos, GPOs, DNS y DHCP, con auditoría periódica de cuentas y equipos.' },
    en: { title: 'Active Directory · Entra ID', src: 'multi-site · GPOs, DNS, DHCP', state: 'OPERATIONAL',
          detail: 'On-premise domain and cloud identity for a three-site organization: users, groups, GPOs, DNS and DHCP, with regular audits of accounts and computers.' },
  },
  {
    id: 'SYS-M365', sev: 'up',
    es: { title: 'Microsoft 365 · tenant', src: 'Exchange Online · Defender · Entra ID', state: 'SINCRONIZADO',
          detail: 'Administración del tenant: correo con Exchange Online (SPF/DKIM/DMARC), seguridad con Defender, licencias y gobierno de los accesos delegados de proveedores.' },
    en: { title: 'Microsoft 365 · tenant', src: 'Exchange Online · Defender · Entra ID', state: 'SYNCED',
          detail: 'Tenant administration: Exchange Online mail (SPF/DKIM/DMARC), Defender security, licensing and governance of delegated partner access.' },
  },
  {
    id: 'SYS-VIRT', sev: 'up',
    es: { title: 'Virtualización · Proxmox VE / PBS', src: 'VMs, contenedores y copias', state: 'OPERATIVO',
          detail: 'Plataforma virtualizada con copia diaria verificada en Proxmox Backup Server y servicios migrados desde Hyper-V. Experiencia previa con VMware, Docker y LXC.' },
    en: { title: 'Virtualization · Proxmox VE / PBS', src: 'VMs, containers & backups', state: 'OPERATIONAL',
          detail: 'Virtualized platform with verified daily backups to Proxmox Backup Server and services migrated from Hyper-V. Previous experience with VMware, Docker and LXC.' },
  },
  {
    id: 'SYS-NET', sev: 'guard',
    es: { title: 'Red · MikroTik / WireGuard', src: 'VLANs, firewall, VPN', state: 'PROTEGIENDO',
          detail: 'Routing, VLANs, NAT y firewall en MikroTik RouterOS, y VPN WireGuard para el acceso remoto. Experiencia previa con WatchGuard, switching gestionable y anillos de fibra con RSTP.' },
    en: { title: 'Network · MikroTik / WireGuard', src: 'VLANs, firewall, VPN', state: 'GUARDING',
          detail: 'Routing, VLANs, NAT and firewall on MikroTik RouterOS, plus WireGuard VPN for remote access. Previous experience with WatchGuard, managed switching and RSTP fibre rings.' },
  },
  {
    id: 'SYS-DOC', sev: 'up',
    es: { title: 'Documentación como código · Git', src: 'runbooks, ADR, inventario', state: 'VERSIONADO',
          detail: 'Toda la infraestructura documentada en Git: runbooks operativos, decisiones de arquitectura (ADR) e inventario de activos con la fiabilidad de cada dato indicada.' },
    en: { title: 'Documentation as code · Git', src: 'runbooks, ADRs, inventory', state: 'VERSIONED',
          detail: 'The whole infrastructure documented in Git: operational runbooks, architecture decision records (ADRs) and an asset inventory with the reliability of each data point.' },
  },
  {
    id: 'SYS-MON', sev: 'watch',
    es: { title: 'Monitorización · Nagios / Zabbix', src: 'disponibilidad y alertas', state: 'MONITORIZANDO',
          detail: 'Supervisión de servidores, servicios y dispositivos de red. Alertas proactivas para anticipar caídas antes de que afecten al usuario.' },
    en: { title: 'Monitoring · Nagios / Zabbix', src: 'availability & alerts', state: 'WATCHING',
          detail: 'Monitoring of servers, services and network devices. Proactive alerts to anticipate outages before they reach the user.' },
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
  { es: 'Microsoft', en: 'Microsoft', items: ['Active Directory', 'GPOs', 'Windows Server', 'M365', 'Entra ID', 'Exchange Online', 'Defender', 'Intune'] },
  { es: 'Sistemas operativos', en: 'Operating systems', items: ['Debian', 'Ubuntu', 'SUSE'] },
  { es: 'Virtualización', en: 'Virtualization', items: ['Proxmox VE', 'Proxmox Backup Server', 'VMware', 'LXC', 'Docker'] },
  { es: 'Redes / Perímetro', en: 'Networking / Perimeter', items: ['MikroTik', 'WireGuard', 'WatchGuard', 'pfSense', 'VLANs', 'VPN'] },
  { es: 'Almacenamiento / ERP', en: 'Storage / ERP', items: ['TrueNAS', 'SAP Business One', 'SQL Server'] },
  { es: 'Monitorización', en: 'Monitoring', items: ['Nagios', 'Zabbix', 'Grafana'] },
  { es: 'Scripting / Automatización', en: 'Scripting / Automation', items: ['PowerShell', 'Bash', 'Git'] },
  { es: 'ITSM / Soporte', en: 'ITSM / Support', items: ['Helix ITSM', 'JIRA', 'Salesforce'] },
];

export const CERTS = [
  { name: 'IFCT0410 · Administración de redes', state: 'done' },
  { name: 'IFCT0050 · Ciberseguridad OT', state: 'done' },
  { name: 'IFCT095PO · Python', state: 'done' },
  { name: 'FP Superior · ASIR', state: 'done' },
];

export const T = {
  es: {
    role: 'Administrador de Sistemas y Ciberseguridad',
    feedTitle: 'Estado de sistemas',
    feedSub: 'Monitorización en vivo',
    hookLabel: '// el músculo',
    hook:
      'Casi 9 años en operaciones técnicas de servicio continuo bajo SLA: incidencias, diagnóstico y resolución contrarreloj de sistemas de alarma y videovigilancia. Esa base —método, profesionalidad y orientación al usuario— es la que hoy aplico a la administración de sistemas en un entorno regulado.',
    sectionProjects: 'Proyectos',
    sectionProjectsSub: 'Infraestructura real, no diapositivas',
    sectionExp: 'Trayectoria',
    sectionGoal: 'Hacia dónde voy',
    goalText:
      'Hoy administro una infraestructura híbrida —on-premise, Microsoft 365 y Entra ID— en un entorno regulado. Mi objetivo es seguir llevándola hacia el cloud de Microsoft, automatizar lo repetitivo y que la seguridad y la documentación formen parte del diseño, no un añadido.',
    sectionSkills: 'Stack técnico',
    sectionCerts: 'Formación y ruta',
    expItems: [
      {
        role: 'Administrador de Sistemas y Ciberseguridad',
        org: 'Empresa confidencial · sector Defensa',
        period: '2026 – act.',
        desc: 'Infraestructura IT de tres sedes con CPD propio y administración del tenant de Microsoft 365: Active Directory, Entra ID, Proxmox VE/PBS, MikroTik y puesto de trabajo. Documentación completa como código, análisis de riesgos orientado al ENS y diseño del acceso auditado de terceros y de la estrategia de copias.',
      },
      {
        role: 'Técnico de Soporte IT & Desarrollo SAP B1/HANA',
        org: 'Cartronic Group',
        period: '2025 – 2026',
        desc: 'Administración de infraestructura corporativa: Active Directory (50+ usuarios), GPOs, firewall WatchGuard, virtualización (Proxmox, VMware) y monitorización (Nagios, Zabbix). Soporte N1-N2 sobre M365 y Google Workspace. Desarrollo y mantenimiento del entorno SAP B1/HANA: queries, procedures, integración con componentes .NET y testing de APIs con Postman.',
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
    statusReady: 'todos los sistemas operativos',
  },
  en: {
    role: 'Systems & Cybersecurity Administrator',
    feedTitle: 'Systems status',
    feedSub: 'Live monitoring',
    hookLabel: '// the muscle',
    hook:
      'Almost 9 years in round-the-clock technical operations under SLA: handling incidents, diagnosing issues and resolving problems against the clock for alarm and video surveillance systems. That foundation—methodology, professionalism and user focus—is what I now bring to systems administration in a regulated environment.',
    sectionProjects: 'Projects',
    sectionProjectsSub: 'Real infrastructure, not slides',
    sectionExp: 'Track record',
    sectionGoal: 'Where I am heading',
    goalText:
      'Today I run a hybrid infrastructure —on-premise, Microsoft 365 and Entra ID— in a regulated environment. My goal is to keep moving it towards the Microsoft cloud, automate the repetitive and make security and documentation part of the design, not an afterthought.',
    sectionSkills: 'Tech stack',
    sectionCerts: 'Training & path',
    expItems: [
      {
        role: 'Systems & Cybersecurity Administrator',
        org: 'Confidential company · Defence sector',
        period: '2026 – now',
        desc: 'IT infrastructure across three sites with their own data rooms, plus Microsoft 365 tenant administration: Active Directory, Entra ID, Proxmox VE/PBS, MikroTik and endpoints. Full documentation as code, ENS-oriented risk analysis and design of audited third-party access and the backup strategy.',
      },
      {
        role: 'IT Support Technician & SAP B1/HANA Developer',
        org: 'Cartronic Group',
        period: '2025 – 2026',
        desc: 'Corporate infrastructure administration: Active Directory (50+ users), GPOs, WatchGuard firewall, virtualization (Proxmox, VMware) and monitoring (Nagios, Zabbix). N1-N2 support on M365 and Google Workspace. Development and maintenance of the SAP B1/HANA environment: queries, procedures, integration with .NET components and API testing with Postman.',
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
    statusReady: 'all systems operational',
  },
};

export const STATE_LABEL = {
  up: { es: 'OPERATIVO', en: 'OPERATIONAL', color: 'ok' },
  guard: { es: 'PROTEGIENDO', en: 'GUARDING', color: 'info' },
  watch: { es: 'MONITORIZANDO', en: 'WATCHING', color: 'watching' },
};
