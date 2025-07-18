import { ProjectId, Publication, PublicationTag } from "../types";

const publications: Publication[] = [
  
  {
    authors: [
      "N. Lewis",
      "S. Byna"
      
    ],
    title:
      "Efficient Data Movement and Computation via In-Flight Analysis",
    venue:
      "International Conference on Scalable Scientific Data Management 2025 (SSDBM 2025)",
    type: "Poster",
    date: "June, 2025",
    tags: [],
    links: {
      poster: "https://sbyna.github.io/research/papers/2025/202507-SSDBM-InFlight-poster.pdf",
      
    }
  },
  
  
  {
    authors: [
      "K. Hiniduma",
      "D. Ryan",
      "S. Byna",
      "J. L. Bez",
      "R. Madduri"
    ],
    title:
      "AIDRIN 2.0: A Framework to Assess Data Readiness for AI",
    venue:
      "International Conference on Scalable Scientific Data Management 2025 (SSDBM 2025)",
    type: "Poster",
    date: "June, 2025",
    tags: ['AIDRIN', 'DRAI'],
    links: {
      poster: "https://sbyna.github.io/research/papers/2025/202507-SSDBM-AIDRIN-poster.pdf",
      pdf: "https://arxiv.org/pdf/2505.18213"
    }
  },

  {
    authors: [
      "C. Egersdoerfer",
      "D. Dai",
      "A. Sareen",
      "J. L. Bez",
      "S. Byna",
      "D. Xu"
      
    ],
    title:
      "Augmenting LLMs for HPC I/O Performance Diagnosis",
    venue:
      "International Conference on Scalable Scientific Data Management 2025 (SSDBM 2025)",
    type: "Poster",
    date: "June, 2025",
    tags: [],
    links: {
      poster: "https://sbyna.github.io/research/papers/2025/202507-SSDBM-ION2-poster.pdf",
      
    }
  },
  
  
  {
    authors: [
      "N. Lewis",
      "J. L. Bez",
      "S. Byna"
    ],
    title:
      "I/O in Machine Learning Applications on HPC Systems: A 360-degree Survey",
    venue:
      "ACM Comput. Surv. 57, 10, Article 256, 42 pages",
    type: "Journal",
    date: "May, 2025",
    tags: [],
    links: {doi: "https://doi.org/10.1145/3722215"},
  },
  {
    authors: [
      "K. Hiniduma",
      "S. Byna",
      "J. L. Bez",
      
    ],
    title:
      "Data Readiness for AI: A 360-Degree Survey",
    venue:
      "ACM Comput. Surv. 57, 9, Article 219, 39 pages",
    type: "Journal",
    date: "April, 2025",
    tags: [
      "AIDRIN", "DRAI"
    ],
    links: {doi: "https://doi.org/10.1145/3722214",
            pdf: "https://arxiv.org/pdf/2404.05779"
    },
  },
 {
  authors: [
    "C. Egersdoerfer",
    "A. Sareen",
    "J. L. Bez",
    "S. Byna",
    "D. Xu",
    "D. Dai"],
  title:
    "IOAgent: Democratizing Trustworthy HPC I/O Performance Diagnosis Capability via LLMs",
  venue:
    "39th IEEE International Parallel & Distributed Processing Symposium",
  type: "Conference",
  date: "June 2025",
  tags: [
    
  ],
  links: {paper: "https://drive.google.com/file/d/1UBqxqErz3mc0Cgvte-aBHDS7U4B5iMMw/view"}
 },
 {
  authors: [
    "S. Breitenfeld",
    "H. Tang",
    "H. Zheng",
    "J. Henderson",
    "S. Byna",
  ],
  title:
    "HDF5 in the exascale era: Delivering efficient and scalable parallel I/O for exascale applications",
  venue:
    "The International Journal of High Performance Computing Applications (IJHPCA)",
  type: "Journal",
  date: "October 2024",
  tags: [
    "HDF5"
  ],
  links: {doi: "https://journals.sagepub.com/doi/10.1177/10943420241288244"},
 },
 {
  "authors": [
    "B. Dong", "A. Nayak", "V. R. Tribaldos",
    "K. Wu", "J. Ajo-Franklin", "Q. Zhang", "F. Guo",
    "S. Byna", "P. Dobson", "A. Sim"
  ],
  "title": "TensorSearch: Parallel Similarity Search on Tensors",
  "venue": "2024 IEEE International Conference on Big Data (BigData)",
  "type": "Conference",
  "date": "2024",
  "tags": ["Tensor", "Parallelism"],
  "links": {"preprint": "https://crd.lbl.gov/assets/Uploads/TensorSearch-final-version-paper.pdf"}
},
{
  "authors": [
    "R. Jain", "H. Tang", "A. Dhruv", "S. Byna"
  ],
  "title": "Enabling Data Reduction for Flash-X Simulations",
  "venue": "The 10th International Workshop on Data Analysis and Reduction for Big Scientific Data, SC24 Workshops",
  "type": "Workshop",
  "date": "2024",
  "tags": ["Data-Reduction"],
  "links": {"ieee": "https://ieeexplore.ieee.org/abstract/document/10820765"}
},
{
  "authors": [
    "C. Wang", "H. Tang", "J. L. Bez", "S. Byna"
  ],
  "title": "Object-Centric Data Management in HPC Workflows-A Case Study",
  "venue": "2024 IEEE International Conference on Cluster Computing Workshops (CLUSTER Workshops)",
  "type": "Workshop",
  "date": "2024",
  "tags": [],
  "links": {}
},
{
  "authors": [
    "K. Sanchez", "A. Gavin", "S. Byna", "K. Wu", "X. Zhang"
  ],
  "title": "A High-Performance Collective I/O Framework Leveraging Node-Local Persistent Memory",
  "venue": "30th International European Conference on Parallel and Distributed Computing (Euro-Par) 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["I/O", "Persistent Memory"],
  "links": {}
},
{
  "authors": [
    "N. Lewis", "K. Velusamy", "K. Harms", "H. Zheng"
  ],
  "title": "Copper: Cooperative Caching Layer for Scalable Data Loading in Exascale Supercomputers",
  "venue": "SC24-W: Workshops of the International Conference for High Performance Computing, Networking, Storage and Analysis",
  "type": "Workshop",
  "date": "2024",
  "tags": [],
  "links": {
    "doi": "https://ieeexplore.ieee.org/document/10820663"
  }
},
{
  authors: [
    "K. Hiniduma",
    "S. Byna",
    "J. L. Bez",
    "R. Madduri"
  ],
  title:
    "AI Data Readiness Inspector (AIDRIN) for Quantitative Assessment of Data Readiness for AI",
  venue:
    "SSDBM '24: Proceedings of the 36th International Conference on Scientific and Statistical Database Management. Article No.: 7, Pages 1 - 12",
  type: "Conference",
  date: "August, 2024",
  tags: [
    "AIDRIN", "DRAI"
  ],
  links: {doi: "https://doi.org/10.1145/3676288.3676296",
          pdf: "https://arxiv.org/pdf/2406.19256"
  },
},
{
  "authors": [
    "R. Han", "M. Zheng", "S. Byna", "H. Tang", "B. Dong",
    "D. Dai", "Y. Chen", "D. Kim", "J. Hassoun", "D.Thorsley", "M. Wolf"
  ],
  "title": "PROV-IO+: A Cross-Platform Provenance Framework for Scientific Data on HPC Systems",
  "venue": "IEEE Transactions on Parallel and Distributed Systems (TPDS)",
  "type": "Journal",
  "date": "2024",
  "tags": ["HPC"],
  "links": {}
},
{
  "authors": [
    "J. L. Bez", "H. Tang", "S. Breitenfeld", "H. Zheng",
    "W. Liao", "K. Hou", "Z. Huang", "S. Byna"
  ],
  "title": "h5bench: Exploring HDF5 Access Patterns Performance in Pre-Exascale Platforms",
  "venue": "Concurrency and Computation: Practice and Experience (CCPE)",
  "type": "Journal",
  "date": "2024",
  "tags": ["HDF5"],
  "links": {}
},
{
  "authors": [
    "J. L. Bez", "H. Ather", "Y. Xia", "S. Byna"
  ],
  "title": "Drilling Down I/O Bottlenecks with Cross-layer I/O Profile Exploration",
  "venue": "IPDPS 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["I/O Bottleneck"],
  "links": {}
},
{
  "authors": [
    "N. Rajesh", "K. Bateman", "S. Byna", "J. L. Bez",
    "A. Kougkas", "X. Sun"
  ],
  "title": "TunIO: An AI-powered Framework for Optimizing HPC I/O",
  "venue": "IPDPS 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["HPC", "I/O Optimization"],
  "links": {}
},
{
  authors: [
    "H. Oh",
    "W. Zhang",
    "C. D. Rickett",
    "S. R. Sukumar",
    "S. Byna"
  ],
  title:
    "Evaluating Performance Trade-offs of Caching Strategies for AI-Powered Querying Systems",
  venue:
    "2024 IEEE International Conference on Big Data (BigData)",
  type: "Conference",
  date: "2024",
  tags: [
  
  ],
  links: {doi: "https://doi.org/10.1109/BigData62323.2024.10825819"},
},
{
  "authors": [
    "D. K. Sung", "Y. Son", "A. Sim", "J. Wu", "S. Byna",
    "H. Tang", "H. Eom", "S. Kim"
  ],
  "title": "A2FL: Autonomous and Adaptive File Layout in HPC through Real-time Access Pattern",
  "venue": "IPDPS 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["HPC"],
  "links": {}
},
{
  "authors": [
    "W. Zhang", "H. Tang", "S. Byna"
  ],
  "title": "IDIOMS: Index-powered Distributed Object-centric Metadata Search for Scientific Data Management",
  "venue": "CCGrid 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["Metadata Management"],
  "links": {}
},
{
  "authors": [
    "B. Dong", "J. Wu", "S. Byna"
  ],
  "title": "The Art of Sparsity: Mastering High-Dimensional Tensor Storage",
  "venue": "ESSA 2024 in conjunction with IPDPS 2024",
  "type": "Workshop",
  "date": "2024",
  "tags": ["Tensor", "Storage", ],
  "links": {"preprint": "https://sbyna.github.io/research/papers/2024/202405-ESSA-art-of-sparsity.pdf"}
},
{
  "authors":[
    "K. Hiniduma",
    "Z. Li",
    "A. Sinha",
    "R. Madduri",
    "S. Byna"
  ],
  "title": "CADRE: Customizable Assurance of Data Readiness in Privacy-Preserving Federated Learning",
  "venue": "IEEE e-Science 2025",
  "type": "Conference",
  "date": "2025",
  "tags": [
    "AIDRIN", "DRAI", "Federated Learning",
  ],
  "links": {"pdf": "https://arxiv.org/pdf/2505.23849"}
},
{
  authors: [
    "B. Swaminathan",
    "J. Kang",
    "K. Vaidya",
    "A. Srinivasan",
    "P. Kumar",
    "S. Byna",
    "D. Barbarash"
  ],
  title: "Crowd cluster data in the USA for analysis of human response to COVID-19 events and policies",
  venue: "Nature, Scientific Data 10, 267, May 2023",
  type: "Journal",
  date: "May, 2023",
  tags: [],
  links: {
    doi: "https://doi.org/10.1038/s41597-023-02176-1"
  }
},
{
  authors: [
    "C. Niu",
    "W. Zhang",
    "S. Byna",
    "Y. Chen",
  ],
  title: "PSQS: Parallel Semantic Querying Service for Self-describing File Formats",
  venue: "The 2023 IEEE International Conference on Big Data (BigData'23), 2023",
  type: "Conference",
  date: "2023",
  tags: [],
  links: {
    preprint: "https://sbyna.github.io/research/papers/2023/202312-pre-PSQS-Niu.pdf"

  }
},
{
  authors: [
    "K. Sanchez",
    "A. Gavin",
    "S. Byna",
    "J. Wu",
    "X. Zhang",
  ],
  title: "A High-Performance PM-Aware Collective I/O",
  venue: "SC23",
  type: "Conference",
  date: "2023",
  tags: [],
  links: {}
},
{
  authors: [
    "J. L. Bez",
    "S. Byna",
    "S. Ibrahim",
  ],
  title: "I/O Access Patterns in HPC Applications: A 360-Degree Survey",
  venue: "ACM Computing Surveys 2023",
  type: "Journal",
  date: "2023",
  tags: [],
  links: {
    acm: "https://dl.acm.org/doi/10.1145/3611007",
    pdf: "https://sbyna.github.io/research/papers/2023/2023-IOpatterns-360-degree.pdf"

  }
},
{
  authors: [
    "S. Byna",
    "S. Idreos",
    "T. Jones",
    "K. Mohror",
    "R. Ross",
    "F. Rusu",
  ],
  title: "Report for the ASCR Workshop on the Management and Storage of Scientific Data",
  venue: "",
  type: "Technical Report",
  date: "2023",
  tags: [],
  links: {
    osti: "https://www.osti.gov/biblio/1845707/",
    pdf: "https://www.osti.gov/servlets/purl/1845707"
  }
},
{
  "authors": [
    "S. Kim",
    "A. Sim",
    "K. Wu",
    "S. Byna",
    "Y. Son"
  ],
  "title": "Design and implementation of I/O performance prediction scheme on HPC systems through large-scale log analysis",
  "venue": "Journal of Big Data",
  "type": "Journal",
  "date": "2023",
  "tags": [],
  "links": {
      "doi": "https://journalofbigdata.springeropen.com/articles/10.1186/s40537-023-00741-4"
  }
},
{
  "authors": [
    "B. Dong",
    "J. L. Bez",
    "S. Byna"
  ],
  "title": "AIIO: Using Artificial Intelligence for Job-level and Automatic I/O Performance Bottleneck Diagnosis",
  "venue": "The 32nd ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC)",
  "type": "Conference",
  "date": "2023",
  "tags": [],
  "links": {
      "preprint":"https://sbyna.github.io/research/papers/2023/2023-06-HPDC-IODiagnosis-Paper.pdf"
  }
},
{
  "authors": [
    "J. Ravi",
    "S. Byna",
    "Q. Koziol",
    "H. Tang",
    "M. Becchi"
  ],
  "title": "Evaluating Asynchronous Parallel I/O on HPC Systems",
  "venue": "37th IEEE International Parallel and Distributed Processing Symposium (IPDPS)",
  "type": "Conference",
  "date": "2023",
  "tags": [],
  "links": {
    "preprint": "https://sbyna.github.io/research/papers/2023/202305-IPDPS-Async-Eval-Paper.pdf"
  }
},
{
  "authors": [
    "H. Ather",
    "J. L. Bez",
    "B. Norris",
    "S. Byna"
  ],
  "title": "Illuminating the I/O Optimization Path of Scientific Applications",
  "venue": "ISC HPC",
  "type": "Conference",
  "date": "2023",
  "tags": [],
  "links": {
    "preprint": "https://sbyna.github.io/research/papers/2023/2023-05-Illuminating-IO-Optimization-ISC-paper.pdf"
  }
},
{
  "authors": [
    "J. Ravi",
    "S. Byna",
    "M. Becchi"
  ],
  "title": "Runway: In-transit Data Compression on Heterogeneous HPC Systems",
  "venue": "The 23rd IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing (CCGrid)",
  "type": "Conference",
  "date": "2023",
  "tags": [],
  "links": {
    "preprint": "https://sbyna.github.io/research/papers/2023/202305-CCGrid-Runway.pdf"
  }
},
{
  "authors": [
    "M. K. H. Chowdhury",
    "H. Tang",
    "J. L. Bez",
    "P. Bangalore",
    "S. Byna"
  ],
  "title": "Efficient Asynchronous I/O with Request Merging",
  "venue": "4th Workshop on Extreme-Scale Storage and Analysis (ESSA)",
  "type": "Workshop",
  "date": "2023",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. L. Bez", "H. Ather", "S. Byna"],
  "title": "Drishti: Guiding End-Users in the I/O Optimization Journey",
  "venue": "PDSW (in conjunction with SC22)",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {}
},
{
  "authors": ["R. Jain", "H. Tang", "A. Dhruv", "J. A. Harris", "S. Byna"],
  "title": "Accelerating Flash-X Simulations with Asynchronous I/O",
  "venue": "PDSW (in conjunction with SC22)",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Jin", "D. Tao", "H. Tang", "S. Di", "S. Byna", "Z. Lukic", "F. Cappello"],
  "title": "Accelerating Parallel Write via Deeply Integrating Predictive Lossy Compression with HDF5",
  "venue": "SC22",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {
    "preprint": "https://eecs.wsu.edu/~dtao/paper/SC22-HDF5SZ.pdf"
  }
},
{
  "authors": ["C. Niu", "W. Zhang", "S. Byna", "Y. Chen"],
  "title": "Kv2vec: A Distributed Representation Method for Key-value Pairs from Metadata Attributes",
  "venue": "IEEE HPEC",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {
    "preprint": "https://discl.cs.ttu.edu/lib/exe/fetch.php?media=wiki:papers:niu_hpec_2022.pdf"
  }
},
{
  "authors": ["R. Han", "S. Byna", "H. Tang", "B. Dong", "M. Zheng"],
  "title": "PROV-IO: An I/O-Centric Provenance Framework for Scientific Data on HPC Systems",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {
    "pdf": "https://sdm.lbl.gov/~sbyna/research/papers/2022/2022-HPDC-Han-Prov-IO.pdf"
  }
},
{
  "authors": ["J. L. Bez", "A. M. Karimi", "A. K. Paul", "B. Xie", "S. Byna", "P. Carns", "S. Oral", "F. Wang", "J. Hanley"],
  "title": "Access Patterns and Performance Behaviors of Multi-layer Supercomputer I/O Subsystems under Production Load",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {
    "pdf": "https://sdm.lbl.gov/~sbyna/research/papers/2022/2022-HPDC-Bez-IO-perf-analysis.pdf"
  }
},
{
  "authors": ["B. Dong", "A. Popescu", "V. R. Tribaldos", "S. Byna", "J. Ajo-Franklin", "K. Wu", "Imperial Valley Dark Fiber Team"],
  "title": "Real-time and post-hoc compression for data from Distributed Acoustic Sensing",
  "venue": "Computers & Geosciences",
  "type": "Journal",
  "date": "2022",
  "tags": [],
  "links": {
    "doi": "https://doi.org/10.1016/j.cageo.2022.105181"
  }
},
{
  "authors": ["S. Kim", "A. Sim", "K. Wu", "S. Byna", "Y. Son"],
  "title": "Design and implementation of dynamic I/O control scheme for large scale distributed file systems",
  "venue": "Cluster Computing",
  "type": "Journal",
  "date": "2022",
  "tags": [],
  "links": {
    "doi": "https://doi.org/10.1007/s10586-022-03640-0"
  }
},
{
  "authors": ["S. Byna"],
  "title": "Understanding Parallel I/O Performance and Tuning",
  "venue": "Fifth International Workshop on Systems and Network Telemetry and Analytics (SNTA)",
  "type": "Keynote",
  "date": "2022",
  "tags": [],
  "links": {
    "doi":"https://doi.org/10.1145/3526064.3534114"
  }
},
{
  "authors": ["S. Byna"],
  "title": "Keynote Speech: Object-focused Storage and Management of Science Data",
  "venue": "12th Workshop on AI and Scientific Computing at Scale using Flexible Computing Infrastructures (FlexScience)",
  "type": "Keynote",
  "date": "2022",
  "tags": [],
  "links": {
    "slides": "https://sdm.lbl.gov/~sbyna/research/papers/2022/20220701-Suren-Byna-FlexScience-Keynote.pdf"
  }
},
{
  "authors": ["J. Wu", "B. Dong", "S. Byna"],
  "title": "FasTensor: Data-Parallel Analysis for Large Remote Sensing Data",
  "venue": "IEEE GRSS RSDM-GeoSci",
  "type": "Workshop",
  "date": "2022",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Zheng", "V. Vishwanath", "Q. Koziol", "H. Tang", "J. Ravi", "J. Mainzer", "S. Byna"],
  "title": "HDF5 Cache VOL: Efficient and Scalable Parallel I/O through Caching Data on Node-local Storage",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {
    "pdf": "https://sdm.lbl.gov/~sbyna/research/papers/2022/2022-CCGrid-Cache_VOL.pdf"
  }
},
{
  "authors": ["A. Bashyal", "P. Van Gemmeren", "S. Sehrish", "K. Knoepfel", "S. Byna", "Q. Kang"],
  "title": "Data Storage for HEP Experiments in the Era of High-Performance Computing",
  "venue": "Snowmass 2021 Proceedings",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {
    "pdf": "https://arxiv.org/pdf/2203.07885.pdf"
  }
},
{
  "authors": ["S. Byna", "S. Idreos", "T. Jones", "K. Mohror", "R. Ross", "F. Rusu"],
  "title": "Basic Research Needs for Management and Storage of Scientific Data",
  "venue": "DOE ASCR Workshop",
  "type": "Technical Report",
  "date": "2022",
  "tags": [],
  "links": {
    "pdf":"https://www.osti.gov/servlets/purl/1845705"
  }
},
{
  "authors": ["S. Jin", "S. Di", "J. Tian", "S. Byna", "D. Tao", "F. Cappello"],
  "title": "Improving Prediction-Based Lossy Compression Dramatically Via Ratio-Quality Modeling",
  "venue": "ICDE",
  "type": "Conference",
  "date": "2022",
  "tags": [],
  "links": {}
},
{
  "authors": ["R. Han", "S. Byna", "M. Zheng"],
  "title": "Towards A Practical Provenance Framework for Scientific Data on HPC Systems",
  "venue": "FAST",
  "type": "Poster",
  "date": "2022",
  "tags": [],
  "links": {
    "poster": "https://sdm.lbl.gov/~sbyna/research/papers/2022/2022-FAST-WIP-Posters-ProvIO-Poster.pdf"
  }
},
{
  "authors": ["S. Byna", "S. Idreos", "T. Jones", "K. Mohror", "R. Ross", "F. Rusu"],
  "title": "Position Papers for the ASCR Workshop on the Management and Storage of Scientific Data",
  "venue": "DOE ASCR Workshop",
  "type": "Technical Report",
  "date": "2022",
  "tags": [],
  "links": {
    "pdf":"https://www.osti.gov/servlets/purl/1843500"
  }
},
{
  "authors": ["Q. Kang", "S. Breitenfeld", "K. Hou", "W. Liao", "R. Ross", "S. Byna"],
  "title": "Optimizing Performance of Parallel I/O Accesses to Non-contiguous Blocks in Multiple Array Variables",
  "venue": "IEEE BigData",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Bang", "C. Kim", "K. Wu", "A. Sim", "S. Byna", "H. Sung", "H. Eom"],
  "title": "An In-Depth I/O Pattern Analysis in HPC Systems",
  "venue": "HiPC",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Zhang", "S. Byna", "H. Sim", "S. Lee", "S. Vazhkudai", "Y. Chen"],
  "title": "Exploiting User Activeness for Data Retention in HPC Systems",
  "venue": "SC",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. L. Bez", "H. Tang", "B. Xie", "D. Williams-Young", "R. Latham", "R. Ross", "S. Oral", "S. Byna"],
  "title": "I/O Bottleneck Detection and Tuning: Connecting the Dots using Interactive Log Analysis",
  "venue": "PDSW (in conjunction with SC21)",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["C. Xu", "S. Bhattacharya", "M. Foltin", "S. Byna", "P. Faraboschi"],
  "title": "Data-Aware Storage Tiering for Deep Learning",
  "venue": "PDSW (in conjunction with SC21)",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "B. Xie", "S. Byna", "P. Carns", "Q. Koziol", "S. Kannan", "J. Lofstead", "S. Oral"],
  "title": "SCTuner: An Auto-tuner Addressing Dynamic I/O Needs on Supercomputer I/O Sub-systems",
  "venue": "PDSW (in conjunction with SC21)",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Fang", "D. Wang", "S. Jin", "Q. Koziol", "Z. Zhang", "Q. Guan", "S. Byna", "S. Krishnamoorthy", "D. Tao"],
  "title": "Characterizing Impacts of Storage Faults on HPC Applications: A Methodology and Insights",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "H. Tang", "Q. Koziol"],
  "title": "Automatic and Transparent Scientific Data Management with Object Abstractions",
  "venue": "PASC (Minisymposium on Data Movement Orchestration on HPC Systems)",
  "type": "Presentation",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["Q. Koziol", "S. Byna"],
  "title": "Planes, Trains, and Automobiles: Making Your Data Available in Time for Discovery",
  "venue": "ASCR Workshop on Reimagining Codesign",
  "type": "Position",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Li", "S. Byna", "Q. Koziol", "H. Tang", "J. L. Bez", "Q. Kang"],
  "title": "h5bench: HDF5 I/O Kernel Suite for Exercising HPC I/O Patterns",
  "venue": "Cray User Group (CUG)",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "Q. Koziol", "J. Ravi", "S. Byna"],
  "title": "Transparent Asynchronous Parallel I/O using Background Threads",
  "venue": "IEEE TPDS",
  "type": "Journal",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Xie", "H. Tang", "S. Byna", "J. Hanley", "Q. Koziol", "T. Li", "S. Oral"],
  "title": "Battle of the Defaults: Extracting Performance Characteristics of HDF5 under Production Load",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2021",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Ravi", "S. Byna", "Q. Koziol"],
  "title": "GPU Direct I/O with HDF5",
  "venue": "PDSW (in conjunction with SC20)",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Enders", "D. Bard", "C. Snavely", "L. Gerhardt", "J. Lee", "B. Totzke", "K. Antypas", "S. Byna", "R. Cheema", "S. Cholia", "M. Day", "A. Gaur", "A. Greiner", "T. Groves", "M. Kiran", "Q. Koziol", "K. Rowland", "C. Samuel", "A. Selvarajan", "A. Sim", "D. Skinner", "R. Thomas", "G. Torok"],
  "title": "Cross-facility science with the Superfacility Project at LBNL",
  "venue": "XLOOP (in conjunction with SC20)",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["K. Hou", "Q. Koziol", "S. Byna"],
  "title": "TaskWorks: A Task Engine for Empowering Asynchronous Operations in HPC Applications",
  "venue": "SC20 Research Posters",
  "type": "Poster",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["C. Niu", "W. Zhang", "S. Byna", "Y. Chen"],
  "title": "Semantic Search for Self-Describing Scientific Data Formats",
  "venue": "SC20 Research Posters",
  "type": "Poster",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Mu", "J. Soumagne", "S. Byna", "Q. Koziol", "H. Tang", "R. Warren"],
  "title": "Interfacing HDF5 with A Scalable Object-centric Storage System on Hierarchical Storage",
  "venue": "Concurrency and Computation: Practice and Experience",
  "type": "Journal",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Xie", "H. Tang", "S. Byna", "Q. Koziol", "S. Oral"],
  "title": "Tuning I/O Performance on Summit – HDF5 Write Use Case Study",
  "venue": "HPC-IODC (in conjunction with ISC High Performance 2020)",
  "type": "Invited",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "S. Byna", "B. Dong", "Q. Koziol"],
  "title": "Parallel Query Service for Object-centric Data Management Systems",
  "venue": "HPBDC (in conjunction with IPDPS 2020)",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["D. Kang", "O. Rübel", "S. Byna", "S. Blanas"],
  "title": "Predicting and Comparing the Performance of Array Management Libraries",
  "venue": "IPDPS",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "V. R. Tribaldos", "X. Xing", "S. Byna", "J. Ajo-Franklin", "K. Wu"],
  "title": "DASSA: Parallel DAS Data Storage and Analysis for Subsurface Event Detection",
  "venue": "IPDPS",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Kim", "A. Sim", "K. Wu", "S. Byna", "Y. Son", "H. Eom"],
  "title": "Towards HPC I/O Performance Prediction through Large-scale Log Analysis",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Bang", "C. Kim", "K. Wu", "A. Sim", "S. Byna", "S. Kim", "H. Eom"],
  "title": "HPC Workload Characterization Using Feature Selection and Clustering",
  "venue": "SNTA",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Patel", "S. Byna", "G. K. Lockwood", "N. J. Wright", "P. Carns", "R. Ross", "D. Tiwari"],
  "title": "Uncovering Access, Reuse, and Sharing Characteristics of I/O-Intensive Files on Large-Scale Production HPC Systems",
  "venue": "FAST",
  "type": "Conference",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "M. S. Breitenfeld", "B. Dong", "Q. Koziol", "E. Pourmal", "D. Robinson", "J. Soumagne", "H. Tang", "V. Vishwanath", "R. Warren"],
  "title": "ExaHDF5: Delivering Efficient Parallel I/O on Exascale Computing Systems",
  "venue": "Journal of Computer Science and Technology",
  "type": "Journal",
  "date": "2020",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Zhang", "S. Byna", "C. Niu", "Y. Chen"],
  "title": "Exploring Metadata Search Essentials for Scientific Data Management",
  "venue": "HiPC",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "S. Byna", "S. Bailey", "Z. Lukic", "J. Liu", "Q. Koziol", "B. Dong"],
  "title": "Tuning Object-centric Data Management Systems for Large Scale Scientific Applications",
  "venue": "HiPC",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["R. Warren", "J. Soumagne", "J. Mu", "H. Tang", "S. Byna", "B. Dong", "Q. Koziol"],
  "title": "Analysis in the Data Path of an Object-centric Data Management System",
  "venue": "HiPC",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "Q. Koziol", "S. Byna", "J. Mainzer", "T. Li"],
  "title": "Enabling Transparent Asynchronous I/O using Background Threads",
  "venue": "PDSW (in conjunction with SC19)",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["G. K. Lockwood", "S. Snyder", "S. Byna", "P. Carns", "N. J. Wright"],
  "title": "Understanding Data Motion in the Modern HPC Data Center",
  "venue": "PDSW (in conjunction with SC19)",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["M. Agarwal", "D. Singhvi", "P. Malakar", "S. Byna"],
  "title": "Active Learning-based Automatic Tuning and Prediction of Parallel I/O Performance",
  "venue": "PDSW (in conjunction with SC19)",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Patel", "S. Byna", "G. K. Lockwood", "D. Tiwari"],
  "title": "Revisiting I/O Behavior in Large-Scale Storage Systems: The Expected and the Unexpected",
  "venue": "SC19",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Zhang", "S. Byna", "H. Tang", "B. Williams", "Y. Chen"],
  "title": "MIQS: Metadata Indexing and Querying Service for Self-Describing File Formats",
  "venue": "SC19",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Mainzer", "N. Fortner", "G. Heber", "E. Pourmal", "Q. Koziol", "S. Byna", "M. Paterno"],
  "title": "Sparse Data Management in HDF5",
  "venue": "XLOOP (in conjunction with SC19)",
  "type": "Workshop",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["D. Kang", "O. Rübel", "S. Byna", "S. Blanas"],
  "title": "Comparison of Array Management Library Performance - A Neuroscience Use Case",
  "venue": "SC19",
  "type": "Poster",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "K. Wu", "S. Byna", "H. Tang"],
  "title": "SLOPE: Structural Locality-aware Programming Model for Composing Array Data Analysis",
  "venue": "ISC High Performance",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Wang", "S. Byna", "G. Lockwood", "P. Carns", "S. Snyder", "S. Kim", "N. Wright"],
  "title": "A Zoom-in Analysis of I/O Logs to Detect Root Causes of I/O Performance Bottlenecks",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Kim", "A. Sim", "K. Wu", "S. Byna", "T. Wang", "Y. Son", "H. Eom"],
  "title": "DCA-IO: A Dynamic I/O Control Scheme for Parallel and Distributed File System",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "P. F. Heiner Kilian", "X. Li", "F. Guo", "S. Byna", "K. Wu"],
  "title": "Terabyte-scale Particle Data Analysis: An ArrayUDF Case Study",
  "venue": "SSDBM",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Mu", "J. Soumagne", "S. Byna", "Q. Koziol", "H. Tang", "R. Warren"],
  "title": "Interfacing HDF5 with A Scalable Object-centric Storage System on Hierarchical Storage",
  "venue": "Cray User Group (CUG)",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Li", "Q. Koziol", "H. Tang", "J. Liu", "S. Byna"],
  "title": "I/O Performance Analysis of Science Applications Using HDF5 File-level Provenance",
  "venue": "Cray User Group (CUG)",
  "type": "Conference",
  "date": "2019",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Behzad", "S. Byna", "Prabhat", "M. Snir"],
  "title": "Optimizing I/O Performance of HPC Applications with Autotuning",
  "venue": "ACM Transactions on Parallel Computing (TOPC)",
  "type": "Journal",
  "date": "2019",
  "tags": [],
  "links": {
    "doi": "10.1145/3309205"
  }
},
{
  "authors": ["B. Yildiz", "K. Wu", "S. Byna", "A. Shoshani"],
  "title": "Parallel membership queries on very large scientific data sets using bitmap indexes",
  "venue": "Concurrency and Computation: Practice and Experience",
  "type": "Journal",
  "date": "2019",
  "tags": [],
  "links": {
    "doi": "https://doi.org/10.1002/cpe.5157"
  }
},
{
  "authors": ["H. Xing", "S. Floratos", "S. Blanas", "S. Byna", "Prabhat", "K. Wu", "P. Brown"],
  "title": "ArrayBridge: Interweaving declarative array processing in SciDB with imperative HDF5-based programs",
  "venue": "ICDE",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "T. Wang", "H. Tang", "Q. Koziol", "K. Wu", "S. Byna"],
  "title": "ARCHIE: Data Analysis Acceleration with Array Caching in Hierarchical Storage",
  "venue": "IEEE BigData",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. S. Vetter", "R. Brightwell", "M. Gokhale", "P. McCormick", "R. Ross", "J. Shalf", "K. Antypas", "D. Donofrio", "A. Dubey", "T. Humble", "C. Schuman", "B. Van Essen", "S. Yoo", "A. Aiken", "D. Bernholdt", "S. Byna", "K. Cameron", "F. Cappello", "B. Chapman", "A. Chien", "M. Hall", "R. Hartman-Baker", "Z. Lan", "M. Lang", "J. Leidel", "S. Li", "R. Lucas", "J. Mellor-Crummey", "P. Peltz Jr.", "T. Peterka", "M. Strout", "J. Wilke"],
  "title": "Extreme Heterogeneity 2018: DOE ASCR Basic Research Needs Workshop on Extreme Heterogeneity",
  "venue": "DOE Report",
  "type": "Technical Report",
  "date": "2018",
  "tags": [],
  "links": {
    "doi": "10.2172/1473756"
  }
},
{
  "authors": ["S. Byna", "Q. Koziol", "V. Vishwanath", "J. Soumagne", "H. Tang", "K. Mu", "R. Warren", "F. Tessier", "B. Dong", "T. Wang", "J. Liu"],
  "title": "Proactive Data Containers (PDC): An object-centric data store for large-scale computing systems",
  "venue": "AGU Fall Meeting",
  "type": "Presentation",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Zhang", "H. Tang", "S. Byna", "Y. Cheng"],
  "title": "DART: Distributed Adaptive Radix Tree for Efficient Affix-based Keyword Search on HPC Systems",
  "venue": "PACT",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Liu", "Q. Koziol", "G. Butler", "N. Fortner", "M. Chaarawi", "H. Tang", "S. Byna", "G. Lockwood", "R. Cheema", "K. Kallback-Rose", "D. Hazen", "Prabhat"],
  "title": "Evaluation of HPC Application I/O on Object Storage Systems",
  "venue": "PDSW-DISCS (in conjunction with SC18)",
  "type": "Workshop",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["F. Chowdhury", "J. Liu", "Q. Koziol", "T. Kurth", "S. Farrell", "S. Byna", "Prabhat", "W. Yu"],
  "title": "Initial Characterization of I/O in Large-Scale Deep Learning Applications",
  "venue": "PDSW-DISCS (in conjunction with SC18)",
  "type": "WIP",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Li", "Q. Koziol", "H. Tang", "S. Byna"],
  "title": "Anycast: Rootless Broadcasting with MPI",
  "venue": "ExaMPI (in conjunction with SC18)",
  "type": "Workshop",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Wang", "S. Byna", "B. Dong", "H. Tang"],
  "title": "UniviStor: Integrated Hierarchical and Distributed Storage for HPC",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Wang", "S. Byna", "G. Lockwood", "N. Wright", "P. Carns", "S. Snyder"],
  "title": "IOMiner: Large-scale Analytics Framework for Gaining Knowledge from I/O Logs",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["K. Mu", "J. Soumagne", "H. Tang", "S. Byna", "Q. Koziol", "R. Warren"],
  "title": "A Server-managed Transparent Object Storage Abstraction for HPC",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["G. Lockwood", "S. Snyder", "T. Wang", "S. Byna", "P. Carns", "N. Wright"],
  "title": "A Year in the Life of a Parallel File System",
  "venue": "SC18",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "S. Byna", "F. Tessier", "T. Wang", "B. Dong", "J. Mu", "Q. Koziol", "J. Soumagne", "V. Vishwanath", "J. Liu", "R. Warren"],
  "title": "Toward Scalable and Asynchronous Object-centric Data Management for HPC",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Wadhwa", "S. Byna", "A. R. Butt"],
  "title": "Toward Transparent Data Management in Multi-layer Storage Hierarchy for HPC Systems",
  "venue": "IC2E",
  "type": "Conference",
  "date": "2018",
  "tags": [],
  "links": {}
},
{
  "authors": ["G. Lockwood", "S. Snyder", "W. Yoo", "K. Harms", "Z. Nault", "S. Byna", "P. Carns", "N. Wright"],
  "title": "UMAMI: A Recipe for Generating Meaningful Metrics through Holistic I/O Performance Analysis",
  "venue": "PDSW-DISCS (in conjunction with SC17)",
  "type": "Workshop",
  "date": "2017",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "S. Byna", "B. Dong", "J. Liu", "Q. Koziol"],
  "title": "SoMeta: Scalable Object-centric Metadata Management for High Performance Computing",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2017",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "K. Wu", "S. Byna", "J. Liu", "W. Zhao", "F. Rusu"],
  "title": "ArrayUDF: User-Defined Scientific Data Analysis on Arrays",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2017",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "M. Chaarawi", "Q. Koziol", "J. Mainzer", "F. Willmore"],
  "title": "Tuning HDF5 subfiling performance on parallel file systems",
  "venue": "Cray User Group Conference (CUG)",
  "type": "Conference",
  "date": "2017",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Liu", "Q. Koziol", "H. Tang", "F. Tessier", "W. Bhimji", "B. Cook", "B. Austin", "S. Byna", "B. Thakur", "G. Lockwood", "J. Deslippe", "Prabhat"],
  "title": "Understanding the I/O Performance Gap Between Cori KNL and Haswell",
  "venue": "Cray User Group Conference (CUG)",
  "type": "Conference",
  "date": "2017",
  "tags": [],
  "links": {}
},
{
  "authors": ["C. Xu", "S. Snyder", "O. Kulkarni", "V. Venkatesan", "P. Carns", "S. Byna", "R. Sisneros", "K. Chadalavada"],
  "title": "DXT: Darshan eXtended Tracing",
  "venue": "Cray User Group Conference (CUG)",
  "type": "Conference",
  "date": "2017",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "K. Wu", "Prabhat", "H. Johansen", "J.N. Johnson", "N. Keen"],
  "title": "Data Elevator: Low-contention Data Movement in Hierarchical Storage System",
  "venue": "HiPC",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Zhang", "H. Tang", "S. Ranshous", "S. Byna", "D.F. Martin", "K. Wu", "B. Dong", "S. Klasky", "N.F. Samatova"],
  "title": "Exploring memory hierarchy and network topology for runtime AMR data sharing across scientific applications",
  "venue": "IEEE Big Data Conference",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "S. Byna", "S. Harenberg", "W. Zhang", "X. Zou", "D.F. Martin", "B. Dong", "D. Devendran", "K. Wu", "D. Trebotich", "S. Klasky", "N. Samatova"],
  "title": "In situ Storage Layout Optimization for AMR Spatio-temporal Read Accesses",
  "venue": "ICPP",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "K. Wu"],
  "title": "SDS-Sort: Scalable Dynamic Skew-aware Parallel Sorting",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["M.M.A. Patwary", "N.R. Satish", "N. Sundaram", "J. Liu", "P. Sadowski", "E. Racah", "S. Byna", "C. Tull", "W. Bhimji", "Prabhat", "P. Dubey"],
  "title": "PANDA: Extreme Scale Parallel K-Nearest Neighbor on Distributed Architectures",
  "venue": "IPDPS",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Tang", "S. Byna", "S. Harenberg", "X. Zou", "W. Zhang", "K. Wu", "B. Dong", "O. Rubel", "K. Bouchard", "S. Klasky", "N. Samatova"],
  "title": "Usage Pattern-Driven Dynamic Data Layout Reorganization",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Zhang", "H. Tang", "S. Harenberg", "S. Byna", "X. Zou", "D. Devendran", "D. Martin", "K. Wu", "B. Dong", "S. Klasky", "N. Samatova"],
  "title": "AMRZone: A Runtime AMR Data Sharing Framework For Scientific Applications",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["D. Devendran", "S. Byna", "B. Dong", "B. van Straalen", "H. Johansen", "N. Keen", "N. Samatova"],
  "title": "Collective I/O Optimizations for Adaptive Mesh Refinement Data Writes on Lustre File System",
  "venue": "CUG",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["C. Xu", "S. Byna", "V. Venkatesan", "R. Sisneros", "O. Kulkarni", "M. Chaarawi", "K. Chadalavada"],
  "title": "LIOProf: Exposing Lustre File System Behavior for I/O Middleware",
  "venue": "CUG",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Bhimji", "D. Bard", "M. Romanus", "D. Paul", "A. Ovsyannikov", "B. Friesen", "M. Bryson", "J. Correa", "G.K. Lockwood", "V. Tsulaia", "S. Byna", "S. Farrell", "D. Gursoy", "C. Daley", "V. Beckner", "B. van Straalen", "N. Wright", "K. Antypas", "Prabhat"],
  "title": "Accelerating Science with the NERSC Burst Buffer Early User Program",
  "venue": "CUG",
  "type": "Conference",
  "date": "2016",
  "tags": ["Best Paper Award"],
  "links": {}
},
{
  "authors": ["J. Liu", "E. Racah", "Q. Koziol", "R.S. Canon", "A. Gittens", "L. Gerhardt", "S. Byna", "M.F. Ringenburg", "Prabhat"],
  "title": "H5Spark: Bridging the I/O Gap between Spark and Scientific Data Formats on HPC Systems",
  "venue": "CUG",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["X. Zou", "D. Boyuka", "D. Desai", "D. Martin", "S. Byna", "K. Wu", "K. Bansal", "B. Dong", "W. Zhang", "H. Tang", "D. Devendran", "D. Trebotich", "S. Klasky", "H. Johansen", "N. Samatova"],
  "title": "AMR-aware In Situ Indexing and Scalable Querying",
  "venue": "HPC Symposium / SpringSim",
  "type": "Conference",
  "date": "2016",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Jeon", "Prabhat", "S. Byna", "J. Gu", "W. Collins", "M. Wehner"],
  "title": "Characterization of extreme precipitation within atmospheric river events over California",
  "venue": "ASCMO",
  "type": "Journal",
  "date": "2015",
  "tags": [],
  "links": {
    "doi": "10.5194/ascmo-1-45-2015"
  }
},
{
  "authors": ["M.M.A. Patwary", "S. Byna", "N.R. Satish", "N. Sundaram", "Z. Lukic", "V. Roytershteyn", "M.J. Anderson", "Y. Yao", "Prabhat", "P. Dubey"],
  "title": "BD-CATS: Big Data Clustering at Trillion Particle Scale",
  "venue": "SC15",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "K. Wu"],
  "title": "Heavy-tailed Distribution of Parallel I/O System Response Time",
  "venue": "PDSW (SC15)",
  "type": "Workshop",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Behzad", "S. Byna", "Prabhat", "M. Snir"],
  "title": "Pattern-driven Parallel I/O Tuning",
  "venue": "PDSW (SC15)",
  "type": "Workshop",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Snyder", "P. Carns", "R. Latham", "M. Mubarak", "C. Carothers", "B. Behzad", "H.V.T. Luu", "S. Byna", "Prabhat"],
  "title": "Techniques for Modeling Large-scale HPC I/O Workloads",
  "venue": "PMBS15 (SC15)",
  "type": "Workshop",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Krishnan", "S. Byna", "M. Wehner", "J. Gu", "T. O'Brien", "B. Loring", "D. Stone", "W. Collins", "Prabhat", "Y. Liu", "J. Johnson", "C. Paciorek"],
  "title": "Enabling Efficient Climate Science Workflows in High Performance Computing Environments",
  "venue": "AGU Fall Meeting",
  "type": "Poster",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "K. Wu"],
  "title": "Spatially Clustered Join on Heterogeneous Scientific Data Sets",
  "venue": "IEEE BigData",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Kim", "B. Dong", "S. Byna", "K. Wu"],
  "title": "Security for the Scientific Data Services Framework",
  "venue": "PSBD (IEEE BigData)",
  "type": "Workshop",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Liu", "Y. Chen", "S. Byna"],
  "title": "Collective Computing for Scientific Big Data Analysis",
  "venue": "P2S2 (ICPP)",
  "type": "Workshop",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Behzad", "S. Byna", "S. Wild", "Prabhat", "M. Snir"],
  "title": "Dynamic Model-driven Parallel I/O Performance Tuning",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["H. Luu", "M. Winslett", "W. Gropp", "R. Ross", "P. Carns", "K. Harms", "Prabhat", "S. Byna", "Y. Yao"],
  "title": "A Multi-platform Study of I/O Behavior on Petascale Supercomputers",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["Prabhat", "S. Byna", "V. Vishwanath", "E. Dart", "M. Wehner", "W. Collins"],
  "title": "TECA: Petscale Pattern Recognition for Climate Science",
  "venue": "CAIP",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["X. Zou", "K. Wu", "D. Boyuka II", "D. Martin", "S. Byna", "H. Tang", "K. Bansal", "T. Ligocki", "H. Johansen", "N. Samatova"],
  "title": "Parallel In Situ Detection of Connected Components in Adaptive Mesh Refinement Data",
  "venue": "CCGrid",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["K. Chadalavada", "R. Sisneros", "S. Byna", "Q. Koziol"],
  "title": "Tuning Parallel I/O on Blue Waters for Writing 10 Trillion Particles",
  "venue": "CUG",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "B. Austin"],
  "title": "Evaluation of Parallel I/O Performance and Energy Consumption with Frequency Scaling on Cray XC30",
  "venue": "CUG",
  "type": "Conference",
  "date": "2015",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Jeon", "C. Paciorek", "Prabhat", "S. Byna", "W. Collins", "M. Wehner"],
  "title": "Uncertainty Quantification for Characterizing Spatial Tail Dependence under Statistical Framework",
  "venue": "AGU Fall Meeting",
  "type": "Poster",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["M.S. Breitenfeld", "K. Chadalavada", "R. Sisneros", "S. Byna", "Q. Koziol", "N. Fortner", "Prabhat", "V. Vishwanath"],
  "title": "Recent Progress in Tuning Performance of Large-scale I/O with Parallel HDF5",
  "venue": "PDSW (SC14)",
  "type": "WIP",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "J. Wu"],
  "title": "Parallel Query Evaluation as a Scientific Data Service",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Blanas", "K. Wu", "S. Byna", "B. Dong", "A. Shoshani"],
  "title": "Parallel Data Analysis Directly on Scientific File Formats",
  "venue": "ACM SIGMOD",
  "type": "Conference",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Behzad", "S. Byna", "S. Wild", "Prabhat", "M. Snir"],
  "title": "Improving Parallel I/O Autotuning with Performance Modeling",
  "venue": "HPDC",
  "type": "Conference",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["H.T. Chiu", "J. Chou", "V. Vishwanath", "S. Byna", "K. Wu"],
  "title": "Simplifying Index File Structure to Improve I/O Performance of Parallel Indexing",
  "venue": "ICPADS",
  "type": "Conference",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["T. Habermann", "A. Collette", "S. Vincena", "W. Benger", "J.J. Billings", "M. Gerring", "K. Hinsen", "P. de Buyl", "M. Könnecke", "F. Maia", "S. Byna"],
  "title": "The Hierarchical Data Format (HDF): A Foundation for Sustainable Data and Software",
  "venue": "WSSSPE2 (SC14)",
  "type": "Workshop",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Liu", "S. Byna", "B. Dong", "K. Wu", "Y. Chen"],
  "title": "Model-driven Data Layout Selection for Improving Read Performance",
  "venue": "HPDIC (IPDPS)",
  "type": "Workshop",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Jeon", "Prabhat", "S. Byna", "W.D. Collins", "M.F. Wehner"],
  "title": "Characterization of Extreme Precipitation under Atmospheric River Events",
  "venue": "Joint Statistical Meeting, Boston, MA",
  "type": "Poster",
  "date": "2014",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Jeon", "Prabhat", "S. Byna", "W. Collins", "M.F. Wehner"],
  "title": "Event Detection and Spatial Analysis for Characterizing Extreme Precipitation",
  "venue": "AGU Fall Meeting",
  "type": "Poster",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["Prabhat", "S. Byna", "V. Vishwanath", "W. Bethel", "W. Collins", "M.F. Wehner"],
  "title": "TECA: Extreme Climate Analytics on Petascale Platforms",
  "venue": "AGU Fall Meeting",
  "type": "Poster",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Behzad", "H. Luu", "J. Huchette", "S. Byna", "Prabhat", "R. Aydt", "Q. Koziol", "M. Snir"],
  "title": "Taming Parallel I/O Complexity with Auto-Tuning",
  "venue": "SC13",
  "type": "Conference",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "J. Wu"],
  "title": "SDS: A Framework for Scientific Data Services",
  "venue": "PDSW (SC13)",
  "type": "Workshop",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Dong", "S. Byna", "J. Wu"],
  "title": "Expediting Scientific Data Analysis with Reorganization",
  "venue": "IEEE Cluster",
  "type": "Conference",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["J.L. Liu", "S. Byna", "Y. Chen"],
  "title": "Segmented Analysis for Reducing Data Movement",
  "venue": "IEEE BigData",
  "type": "Conference",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["K.W. Lin", "J. Chou", "S. Byna", "K. Wu"],
  "title": "Optimizing FastQuery Performance on Lustre File System",
  "venue": "SSDBM",
  "type": "Conference",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "A. Uselton", "Prabhat", "D. Knaak", "Y. He"],
  "title": "Trillion Particles, 120,000 cores, and 350 TBs: Lessons Learned from a Hero I/O Run on Hopper",
  "venue": "CUG",
  "type": "Conference",
  "date": "2013",
  "tags": ["Best Paper Award"],
  "links": {}
},
{
  "authors": ["Prabhat", "W. D. Collins", "M. Wehner", "S. Byna", "C. Paciorek"],
  "title": "Big Data Challenges in Climate Science",
  "venue": "Berkeley Atmospheric Science Symposium, UC Berkeley",
  "type": "Poster",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Bethel", "Prabhat", "S. Byna", "O. Rübel", "K. Wu", "M. Wehner"],
  "title": "Why High Performance Visual Data Analytics is both Relevant and Difficult",
  "venue": "Visualization and Data Analysis, IS&T/SPIE Electronic Imaging",
  "type": "Conference",
  "date": "2013",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "J. Chou", "O. Rübel", "Prabhat", "H. Karimabadi", "W.S. Daughton", "V. Roytershteyn", "W. Bethel", "M. Howison", "J. Hsu", "K.W. Lin", "A. Shoshani", "A. Uselton", "K. Wu"],
  "title": "Parallel I/O, Analysis, and Visualization of a Trillion Particle Simulation",
  "venue": "SC12",
  "type": "Conference",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["B. Behzad", "J. Huchette", "H. Luu", "R. Aydt", "S. Byna", "M. Chaarawi", "Q. Koziol", "Prabhat", "Y. Yao"],
  "title": "Auto-tuning of Parallel I/O Parameters for HDF5 Applications",
  "venue": "SC12",
  "type": "Poster",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Bethel", "R. Ross", "W. Liao", "Prabhat", "K. Schuchardt", "P. Bremer", "O. Rübel", "S. Byna", "K. Wu", "F. Li", "M. Wehner", "J. Patchett", "H-W. Shen", "D. Pugmire", "D. Williams"],
  "title": "Recent Advances in Visual Data Exploration and Analysis of Climate Data",
  "venue": "SciDAC 3 PI Meeting",
  "type": "Poster",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "J. Chou", "O. Rübel", "Prabhat", "H. Karimabadi", "W.S. Daughton", "V. Roytershteyn", "W. Bethel", "M. Howison", "J. Hsu", "K.W. Lin", "A. Shoshani", "A. Uselton", "K. Wu"],
  "title": "Parallel Data, Analysis, and Visualization of a Trillion Particles",
  "venue": "XLDB",
  "type": "Poster",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["W. Bethel", "Prabhat", "O. Rübel", "S. Byna", "K. Wu", "F. Li", "M. Wehner", "J. Chou", "M. Howison", "J. Qiang", "R. D. Ryne", "C. G. R. Geddes", "E. Cormier-Michel"],
  "title": "Big Data Analysis and Visualization: What do Linacs and Tropical Storms have in Common?",
  "venue": "ICAP 2012",
  "type": "Invited",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["Prabhat", "M. Wehner", "S. Byna", "O. Rübel", "F. Li", "W. Bethel", "W. Collins"],
  "title": "13 TB, 80,000 cores and TECA: The search for extreme events in climate output",
  "venue": "AGU Fall Meeting",
  "type": "Poster",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["M. Wehner", "S. Byna", "Prabhat", "T. Yopes", "J. Wu"],
  "title": "Atmospheric Rivers in the CMIP3/5 Historical and Projection Simulations",
  "venue": "WCRP Workshop on CMIP5 Model Analysis",
  "type": "Poster",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["Prabhat", "O. Rübel", "S. Byna", "K. Wu", "M. Wehner", "W. Bethel"],
  "title": "TECA: A Parallel Toolkit for Extreme Climate Analysis",
  "venue": "Third Workshop on Data Mining in Earth System Science (DMESS)",
  "type": "Workshop",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["Y. Yin", "S. Byna", "H. Song", "X. Sun", "B. Thakur"],
  "title": "Boosting Application-Specific Parallel I/O Optimization Using IOSIG",
  "venue": "IEEE/ACM CCGrid",
  "type": "Conference",
  "date": "2012",
  "tags": [],
  "links": {}
},
{
  "authors": ["Prabhat", "S. Byna", "C. Paciorek", "G. Weber", "K. Wu", "T. Yopes", "M. Wehner", "W. Collins", "G. Ostrouchov", "R. Strelitz", "W. Bethel"],
  "title": "Pattern Detection and Extreme Value Analysis on Large Climate Data",
  "venue": "AGU Fall Meeting",
  "type": "Poster",
  "date": "2011-12",
  "tags": [],
  "links": {}
},
{
  "authors": ["K. Wu", "S. Byna", "D. Rotem", "A. Shoshani"],
  "title": "Scientific Data Services - A High-Performance I/O System with Array Semantics",
  "venue": "HPCDB 2011 (co-located with SC11)",
  "type": "Workshop",
  "date": "2011",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "Prabhat", "M. Wehner", "K. Wu"],
  "title": "Detecting Atmospheric Rivers in Large Climate Datasets",
  "venue": "PDAC-11 (co-located with SC11)",
  "type": "Workshop",
  "date": "2011",
  "tags": [],
  "links": {}
},
{
  "authors": ["M. Balman", "S. Byna"],
  "title": "Open problems in network-aware data management in exa-scale computing and terabit networking era",
  "venue": "NDM '11 (co-located with SC11)",
  "type": "Workshop",
  "date": "2011",
  "tags": [],
  "links": {}
},
{
  "authors": ["D. Li", "S. Byna", "S. Chakradar"],
  "title": "Energy-Aware Workload Consolidation on GPU",
  "venue": "International Workshop on Scheduling and Resource Management for Parallel and Distributed Systems, ICPP 2011",
  "type": "Workshop",
  "date": "2011",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun"],
  "title": "Editorial, Special issue on Data Intensive Computing",
  "venue": "Journal of Parallel and Distributed Computing (JPDC)",
  "type": "Journal",
  "date": "2010",
  "tags": [],
  "links": {}
},
{
  "authors": ["M. Becchi", "S. Byna", "S. Cadambi", "S. Chakradar"],
  "title": "Data-Aware Scheduling of Legacy Kernels on Heterogeneous Platforms with Distributed Memory",
  "venue": "ACM Symposium on Parallelism in Algorithms and Architectures (SPAA)",
  "type": "Conference",
  "date": "2010-06",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "J. Meng", "A. Raghunathan", "S. Chakradar", "S. Cadambi"],
  "title": "Best Effort Semantic Document Search on GPUs",
  "venue": "Third Workshop on General-Purpose Computation on Graphics Processing Units (GPGPU-3)",
  "type": "Workshop",
  "date": "2010-03",
  "tags": [],
  "links": {}
},
{
  "authors": ["J. Meng", "A. Raghunathan", "S. Chakradar", "S. Byna"],
  "title": "Exploiting the Forgiving Nature of Applications for Scalable Parallel Execution",
  "venue": "IEEE International Parallel & Distributed Processing Symposium (IPDPS)",
  "type": "Conference",
  "date": "2010",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun", "Y. Chen"],
  "title": "Taxonomy of Data Prefetching Strategies for Multicore Processors",
  "venue": "Journal of Computer Science and Technology (JCST)",
  "type": "Journal",
  "date": "2009-05",
  "tags": [],
  "links": {}
},
{
  "authors": ["Z. Fang", "X. Sun", "Y. Chen", "S. Byna"],
  "title": "Core-aware Memory Access Scheduling Schemes",
  "venue": "IEEE International Parallel & Distributed Processing Symposium (IPDPS)",
  "type": "Conference",
  "date": "2009",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun", "D. Holmgren"],
  "title": "Modeling Data Access Contention in Multicore Architectures",
  "venue": "15th International Conference on Parallel and Distributed Systems (ICPADS)",
  "type": "Conference",
  "date": "2009",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "Y. Chen", "X. Sun", "B. Thakur", "W. Gropp"],
  "title": "Parallel I/O Prefetching Using MPI File Caching and I/O Signatures",
  "venue": "International Conference for High Performance Computing, Networking, Storage and Analysis (SC '08)",
  "type": "Conference",
  "date": "2008-11",
  "tags": [],
  "links": {}
},
{
  "authors": ["Y. Chen", "S. Byna", "X. Sun", "B. Thakur", "W. Gropp"],
  "title": "Hiding I/O Latency with Pre-execution Prefetching for Parallel Applications",
  "venue": "International Conference for High Performance Computing, Networking, Storage and Analysis (SC '08)",
  "type": "Conference",
  "date": "2008-11",
  "tags": [],
  "links": {}
},
{
  "authors": ["X. Sun", "Y. Chen", "S. Byna"],
  "title": "Scalable Computing in Multicore Era",
  "venue": "International Symposium on Parallel Algorithms, Architectures and Programming (PAAP'08)",
  "type": "Conference",
  "date": "2008",
  "tags": [],
  "links": {}
},
{
  "authors": ["Y. Chen", "S. Byna", "X. Sun", "B. Thakur", "W. Gropp"],
  "title": "Exploring Parallel I/O Concurrency with Speculative Prefetching",
  "venue": "37th International Conference on Parallel Processing (ICPP)",
  "type": "Conference",
  "date": "2008",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "Y. Chen", "X. Sun"],
  "title": "A Taxonomy of Data Prefetching Mechanisms",
  "venue": "International Symposium on Parallel Architectures, Algorithms, and Networks (I-SPAN)",
  "type": "Conference",
  "date": "2008-05",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun", "Y. Chen"],
  "title": "Server-based Data Push Architecture for Multi-processor Environments",
  "venue": "Journal of Computer Science and Technology (JCST), 22(5): 641–652",
  "type": "Journal",
  "date": "2007-09",
  "tags": [],
  "links": {}
},
{
  "authors": ["Y. Chen", "S. Byna", "X. Sun"],
  "title": "Data Access History Cache and Associated Data Prefetching Mechanisms",
  "venue": "International Conference for High Performance Computing, Networking, Storage and Analysis (SC07)",
  "type": "Conference",
  "date": "2007",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "Y. Chen", "W. Gropp", "X. Sun", "B. Thakur"],
  "title": "POSTER: The Server-Push I/O Architecture for High-End Computing",
  "venue": "International Conference for High Performance Computing, Networking, Storage and Analysis (SC07)",
  "type": "Poster",
  "date": "2007",
  "tags": [],
  "links": {}
},
{
  "authors": ["X. Sun", "S. Byna", "Y. Chen"],
  "title": "Improving Data Access Performance with Server Push Architecture",
  "venue": "NSF Next Generation Software Program Workshop (in conjunction with IPDPS '07)",
  "type": "Workshop",
  "date": "2007-03",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun", "B. Thakur", "W. Gropp"],
  "title": "Automatic Memory Optimizations for Improving MPI Derived Datatype Performance",
  "venue": "13th European PVM/MPI Users' Group Meeting (Euro PVM/MPI '06)",
  "type": "Conference",
  "date": "2006",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun", "R. Nakhoul"],
  "title": "Memory Servers: A Scope of SOA for High-End Computing",
  "venue": "IEEE International Conference on Services Computing (SCC '06)",
  "type": "Conference",
  "date": "2006",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "K. Cameron", "X. Sun"],
  "title": "Isolating Costs in Shared Memory Communication Buffering",
  "venue": "Parallel Processing Letters, Vol. 15, No. 4, pp. 357–365",
  "type": "Journal",
  "date": "2005-12",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "X. Sun", "W. Gropp", "B. Thakur"],
  "title": "Predicting the Memory-Access Cost Based on Data Access Patterns",
  "venue": "IEEE International Conference on Cluster Computing, San Diego",
  "type": "Conference",
  "date": "2004-09",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "W. Gropp", "X. Sun", "B. Thakur"],
  "title": "Improving the Performance of MPI Derived Datatypes by Optimizing Memory-Access Cost",
  "venue": "IEEE International Conference on Cluster Computing, Hong Kong",
  "type": "Conference",
  "date": "2003-12",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "W. Gropp", "X. Sun", "B. Thakur"],
  "title": "POSTER: Improving the Performance of MPI Derived Datatypes by Optimizing Memory-Access Cost",
  "venue": "ACM/IEEE Supercomputing 2003 Conference (SC'03)",
  "type": "Poster",
  "date": "2003-11",
  "tags": [],
  "links": {}
},
{
  "authors": ["S. Byna", "K. Cameron", "X. Sun"],
  "title": "Memory-Aware Communication - An Experimental Study with MPI",
  "venue": "1st International Workshop on Hardware/Software Support for Parallel and Distributed Scientific and Engineering Computing (SPDSEC02), Charlottesville, VA",
  "type": "Workshop",
  "date": "2002-09",
  "tags": [],
  "links": {}
}




  
];

export default publications;

export function getPublicationsByAuthorShortName(
  authorShortName: string
): Publication[] | undefined {
  return publications.filter((publication) =>
    publication.authors.some((author) => author.includes(authorShortName))
  );
}

export function getPublicationsByTag(
  tag: PublicationTag
): Publication[] | undefined {
  return publications.filter((publication) => publication.tags.includes(tag));
}
