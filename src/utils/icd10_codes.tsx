const Icd10Descriptions: string[] = [
    "Displaced fracture of medial cuneiform of unspecified foot",
    "subsequent encounter for fracture with malunion",
    "Bathroom in mobile home as the place of occurrence of the external cause",
    "Encounter for aftercare following lung transplant",
    "High risk bisexual behavior",
    "Personal history of poliomyelitis",
    "Personal history of malaria",
    "Personal history of other infectious and parasitic diseases",
    "Personal history of other mental and behavioral disorders",
    "Personal history of thrombophlebitis",
    "Personal history of transient ischemic attack (TIA), and cerebral infarction without residual deficits",
    "Personal history of sudden cardiac arrest",
    "Personal history of pneumonia (recurrent)",
    "Personal history of peptic ulcer disease",
    "Personal history of other diseases of the digestive system",
    "Personal history of diseases of the skin and subcutaneous tissue",
    "Personal history of (healed) osteoporosis fracture",
    "Personal history of (healed) other pathological fracture",
    "Personal history of (healed) stress fracture",
    "Personal history of other diseases of the musculoskeletal system and connective tissue",
    "Personal history of cervical dysplasia",
    "Personal history of vaginal dysplasia",
    "Personal history of vulvar dysplasia",
    "Personal history of other diseases of the female genital tract",
    "Personal history of prostatic dysplasia",
    "Personal history of other diseases of male genital organs",
    "Personal history of urinary (tract) infections",
    "Personal history of nephrotic syndrome",
    "Personal history of urinary calculi",
    "Personal history of other diseases of urinary system",
    "Personal history of pre-term labor",
    "Personal history of other complications of pregnancy, childbirth and the puerperium",
    "Personal history of (corrected) hypospadias",
    "Personal history of other specified (corrected) congenital malformations of genitourinary system",
    "Personal history of (corrected) congenital malformations of eye",
    "Personal history of (corrected) congenital malformations of ear",
    "Personal history of other specified (corrected) congenital malformations of nervous system and sense organs",
    "Personal history of (corrected) cleft lip and palate",
    "Personal history of other specified (corrected) congenital malformations of digestive system",
    "Personal history of (corrected) congenital malformations of heart and circulatory system",
    "Personal history of (corrected) congenital malformations of respiratory system",
    "Personal history of (corrected) congenital malformations of integument, limbs and musculoskeletal system",
    "Personal history of (corrected) congenital malformations of face and neck",
    "Personal history of other (corrected) congenital malformations",
    "Personal history of (healed) traumatic fracture",
    "Personal history of traumatic brain injury",
    "Personal history of retained foreign body fully removed",
    "Personal history of other (healed) physical injury and trauma",
    "Personal history of sex reassignment",
    "Personal history of nicotine dependence",
    "Personal history of anaphylaxis",
    "Personal history of other specified conditions",
    "Allergy status to penicillin",
    "Allergy status to other antibiotic agents status",
    "Allergy status to sulfonamides status",
    "Allergy status to other anti-infective agents status",
    "Allergy status to anesthetic agent status",
    "Allergy status to narcotic agent status",
    "Allergy status to analgesic agent status",
    "Allergy status to serum and vaccine status",
    "Allergy status to other drugs, medicaments and biological substances status",
    "Allergy status to unspecified drugs, medicaments and biological substances status",
    "Acquired absence of right thumb",
    "Acquired absence of left thumb",
    "Acquired absence of unspecified thumb",
    "Acquired absence of right finger(s)",
    "Acquired absence of left finger(s)",
    "Acquired absence of unspecified finger(s)",
    "Acquired absence of right hand",
    "Acquired absence of left hand",
    "Acquired absence of unspecified hand",
    "Acquired absence of right wrist",
    "Acquired absence of left wrist",
    "Acquired absence of unspecified wrist",
    "Acquired absence of right upper limb, unspecified level",
    "Acquired absence of left upper limb, unspecified level",
    "Acquired absence of unspecified upper limb, unspecified level",
    "Acquired absence of right upper limb below elbow",
    "Acquired absence of left upper limb below elbow",
    "Acquired absence of unspecified upper limb below elbow",
    "Acquired absence of right upper limb above elbow",
    "Acquired absence of left upper limb above elbow",
    "Acquired absence of unspecified upper limb above elbow",
    "Acquired absence of right shoulder",
    "Acquired absence of left shoulder",
    "Acquired absence of unspecified shoulder",
    "Acquired absence of right great toe",
    "Acquired absence of left great toe",
    "Acquired absence of unspecified great toe",
    "Acquired absence of other right toe(s)",
    "Acquired absence of other left toe(s)",
    "Acquired absence of other toe(s), unspecified side",
    "Acquired absence of right foot",
    "Acquired absence of left foot",
    "Acquired absence of unspecified foot",
    "Acquired absence of right ankle",
    "Acquired absence of left ankle",
    "Acquired absence of unspecified ankle",
    "Acquired absence of right leg below knee",
    "Acquired absence of left leg below knee",
    "Acquired absence of unspecified leg below knee",
    "Acquired absence of right knee",
    "Acquired absence of left knee",
    "Acquired absence of unspecified knee",
    "Acquired absence of right leg above knee",
    "Acquired absence of left leg above knee",
    "Acquired absence of unspecified leg above knee",
    "Acquired absence of right hip joint",
    "Acquired absence of left hip joint",
    "Acquired absence of unspecified hip joint",
    "Acquired absence of limb, unspecified",
    "Acquired absence of eye",
    "Acquired absence of larynx",
    "Acquired absence of other part of head and neck",
    "Acquired absence of unspecified breast and nipple",
    "Acquired absence of right breast and nipple",
    "Acquired absence of left breast and nipple",
    "Acquired absence of bilateral breasts and nipples",
    "Acquired absence of lung [part of]",
    "Acquired absence of stomach [part of]",
    "Acquired total absence of pancreas",
    "Acquired partial absence of pancreas",
    "Acquired absence of other specified parts of digestive tract",
    "Acquired absence of kidney",
    "Acquired absence of other parts of urinary tract",
    "Acquired absence of both cervix and uterus",
    "Acquired absence of uterus with remaining cervical stump",
    "Acquired absence of cervix with remaining uterus",
    "Acquired absence of ovaries, unilateral",
    "Acquired absence of ovaries, bilateral",
    "Acquired absence of other genital organ(s)",
    "Acquired absence of spleen",
    "Acquired absence of other organs",
    "Allergy to peanuts",
    "Allergy to milk products",
    "Allergy to eggs",
    "Allergy to seafood",
    "Allergy to other foods",
    "Food additives allergy status",
    "Bee allergy status",
    "Other insect allergy status",
    "Latex allergy status",
    "Radiographic dye allergy status",
    "Other nonmedicinal substance allergy status",
    "Other allergy status, other than to drugs and biological substances",
    "Patient's noncompliance with dietary regimen",
    "Patient's intentional underdosing of medication regimen due to financial hardship",
    "Patient's intentional underdosing of medication regimen for other reason",
    "Patient's unintentional underdosing of medication regimen due to age-related debility",
    "Patient's unintentional underdosing of medication regimen for other reason",
    "Patient's other noncompliance with medication regimen",
    "Patient's noncompliance with renal dialysis",
    "Patient's noncompliance with other medical treatment and regimen",
    "Personal history of adult physical and sexual abuse",
    "Personal history of adult psychological abuse",
    "Personal history of adult neglect",
    "Personal history of unspecified adult abuse",
    "Other personal history of psychological trauma, not elsewhere classified",
    "Personal history of self-harm",
    "History of falling",
    "Personal history of military deployment",
    "Wandering in diseases classified elsewhere",
    "Risk for dental caries, low",
    "Risk for dental caries, moderate",
    "Risk for dental caries, high",
    "Unspecified risk for dental caries",
    "Other specified personal risk factors, not elsewhere classified",
    "Personal history of contraception",
    "Personal history of antineoplastic chemotherapy",
    "Personal history of monoclonal drug therapy",
    "Personal history of estrogen therapy",
    "Personal history of inhaled steroid therapy",
    "Personal history of systemic steroid therapy",
    "Personal history of immunosupression therapy",
    "Personal history of other drug therapy",
    "Personal history of irradiation",
    "Personal history of extracorporeal membrane oxygenation (ECMO)",
    "Status post administration of tPA (rtPA) in a different facility within the last 24 hours prior to admission to current facility",
    "Personal history of failed moderate sedation",
    "Personal history of unintended awareness under general anesthesia",
    "Personal history of other medical treatment",
    "Tracheostomy status",
    "Gastrostomy status",
    "Ileostomy status",
    "Colostomy status",
    "Other artificial openings of gastrointestinal tract status",
    "Unspecified cystostomy status",
    "Cutaneous-vesicostomy status",
    "Appendico-vesicostomy status",
    "Other cystostomy status",
    "Other artificial openings of urinary tract status",
    "Other artificial opening status",
    "Artificial opening status, unspecified",
    "Kidney transplant status",
    "Heart transplant status",
    "Lung transplant status",
    "Heart and lungs transplant status",
    "Liver transplant status",
    "Skin transplant status",
    "Bone transplant status",
    "Corneal transplant status",
    "Bone marrow transplant status",
    "Intestine transplant status",
    "Pancreas transplant status",
    "Stem cells transplant status",
    "Other transplanted organ and tissue status",
    "Transplanted organ and tissue status, unspecified",
    "Presence of cardiac pacemaker",
    "Presence of aortocoronary bypass graft",
    "Presence of prosthetic heart valve",
    "Presence of xenogenic heart valve",
    "Presence of other heart-valve replacement",
    "Presence of coronary angioplasty implant and graft",
    "Presence of automatic (implantable) cardiac defibrillator",
    "Presence of heart assist device",
    "Presence of fully implantable artificial heart",
    "Presence of other cardiac implants and grafts",
    "Peripheral vascular angioplasty status with implants and grafts",
    "Presence of other vascular implants and grafts",
    "Presence of cardiac and vascular implant and graft, unspecified",
    "Presence of urogenital implants",
    "Presence of intraocular lens",
    "Presence of otological and audiological implant, unspecified",
    "Cochlear implant status",
    "Myringotomy tube(s) status",
    "Presence of other otological and audiological implants",
    "Presence of artificial larynx",
    "Presence of insulin pump (external) (internal)",
    "Presence of other endocrine implants",
    "Presence of tooth-root and mandibular implants",
    "Presence of unspecified orthopedic joint implant",
    "Presence of right artificial shoulder joint",
    "Presence of left artificial shoulder joint",
    "Presence of unspecified artificial shoulder joint",
    "Presence of right artificial elbow joint",
    "Presence of left artificial elbow joint",
    "Presence of unspecified artificial elbow joint",
    "Presence of right artificial wrist joint",
    "Presence of left artificial wrist joint",
    "Presence of unspecified artificial wrist joint",
    "Presence of right artificial hip joint",
    "Presence of left artificial hip joint",
    "Presence of artificial hip joint, bilateral",
    "Presence of unspecified artificial hip joint",
    "Presence of right artificial knee joint",
    "Presence of left artificial knee joint",
    "Presence of artificial knee joint, bilateral",
    "Presence of unspecified artificial knee joint",
    "Presence of right artificial ankle joint",
    "Presence of left artificial ankle joint",
    "Presence of unspecified artificial ankle joint",
    "Finger-joint replacement of right hand",
    "Finger-joint replacement of left hand",
    "Finger-joint replacement, bilateral",
    "Presence of other orthopedic joint implants",
    "Presence of other bone and tendon implants",
    "Presence of artificial skin",
    "Presence of other specified functional implants",
    "Presence of functional implant, unspecified",
    "Presence of artificial eye",
    "Presence of artificial limb (complete) (partial), unspecified",
    "Presence of artificial right arm (complete) (partial)",
    "Presence of artificial left arm (complete) (partial)",
    "Presence of artificial right leg (complete) (partial)",
    "Presence of artificial left leg (complete) (partial)",
    "Presence of artificial arms, bilateral (complete) (partial)",
    "Presence of artificial legs, bilateral (complete) (partial)",
    "Presence of dental prosthetic device (complete) (partial)",
    "Presence of spectacles and contact lenses",
    "Presence of external hearing-aid",
    "Presence of (intrauterine) contraceptive device",
    "Presence of other specified devices",
    "Intestinal bypass and anastomosis status",
    "Arthrodesis status",
    "Presence of cerebrospinal fluid drainage device",
    "Post therapeutic collapse of lung status",
    "Cataract extraction status, right eye",
    "Cataract extraction status, left eye",
    "Cataract extraction status, unspecified eye",
    "Tubal ligation status",
    "Vasectomy status",
    "Coronary angioplasty status",
    "Peripheral vascular angioplasty status",
    "Dental sealant status",
    "Dental restoration status",
    "Other dental procedure status",
    "Breast implant status",
    "Filtering (vitreous) bleb after glaucoma surgery status",
    "Bariatric surgery status",
    "Transplanted organ removal status",
    "Personal history of breast implant removal",
    "Personal history of in utero procedure during pregnancy",
    "Personal history of in utero procedure while a fetus",
    "Other specified postprocedural states",
    "History of uterine scar from previous surgery",
    "Dependence on aspirator",
    "Dependence on respirator [ventilator] status",
    "Encounter for respirator [ventilator] dependence during power failure",
    "Dependence on renal dialysis",
    "Dependence on wheelchair",
    "Dependence on supplemental oxygen"
]


export default Icd10Descriptions;
