import { User, UserRole } from "../../interfaces/user";
import { Content, Wrapper } from "./PatientControl.styles";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import SlideOut from "../../braincase/Form/SlideOut/SlideOut";
import { useState } from "react";
import NationalIdForm from "../Form/NationalIdForm";
import MedicalConditionForm from "../Form/MedicalConditionForm";

interface PatientControlProps {
    patient: User;
}

const PatientControl = ({ patient }: PatientControlProps) => {

    const [editForm, setEditForm] = useState<null | 'Edit Identification' | 'Edit Medical Condition'>(null);

    const isEditFormOpened = Boolean(editForm);

    const getEditForm = (): JSX.Element => {
        switch (editForm) {
            case 'Edit Identification':
                return <NationalIdForm patient={patient} onSubmit={() => setEditForm(null)} onCancel={() => setEditForm(null)} />
            case 'Edit Medical Condition':
                return <MedicalConditionForm patient={patient} onSubmit={() => setEditForm(null)} onCancel={() => setEditForm(null)} />
            default:
                return <></>
        }
    }


    if(!patient) return <Wrapper>No Patient Selected</Wrapper>

    return (
        <Wrapper>
            <Content>
                <div>
                    <div className="key-bar">patient</div>
                    <div className="object-area">
                        <div className="object-table-key">id</div><div className="object-table-value">{patient.id}</div>
                        <div className="object-table-key">username</div><div className="object-table-value">{patient.username}</div>
                    </div>
                </div>
                <div>
                    <div className="key-bar">role</div>
                    <div className="value-area">{UserRole[patient.role]}</div>
                </div>
                <div>
                    <div className="key-bar">avatar</div>
                    <div className="value-area"><img src={patient.imgUrl} alt={patient.name} /></div>
                </div>
                <div>
                    <div className="key-bar">personal</div>
                    <div className="object-area">
                        <div className="object-table-key">firstName</div><div className="object-table-value">{patient.firstName}</div>
                        <div className="object-table-key">lastName</div><div className="object-table-value">{patient.lastName}</div>
                        <div className="object-table-key">gender</div><div className="object-table-value">{patient.gender}</div>
                        <div className="object-table-key">birthdate</div><div className="object-table-value">{patient.birthdate.toDateString()}</div>
                    </div>
                </div>
                <div>
                    <div className="key-bar">
                        <span>nationalId</span>
                        <IconButton className="icon-button" onClick={() => setEditForm('Edit Identification')}><EditIcon className="icon"/></IconButton>
                    </div>
                    <div className="object-area">
                        <div className="object-table-key">number</div><div className="object-table-value">{patient.nationalId}</div>
                        <div className="object-table-key">image</div><div className="object-table-value">{patient.nationalId}</div>
                    </div>
                </div>
                <div>
                    <div className="key-bar">
                        <span>existing medical conditions</span>
                        <IconButton className="icon-button" onClick={() => setEditForm('Edit Medical Condition')}><EditIcon className="icon" /></IconButton>
                    </div>
                    <div className="object-area">
                        <div className="object-table-key">conditions</div><div className="object-table-value">{patient.conditions}</div>
                        <div className="object-table-key">medications</div><div className="object-table-value">{patient.medications}</div>
                        <div className="object-table-key">allergy</div><div className="object-table-value">{patient.allergy}</div>
                    </div>
                </div>
                <div>
                    <div className="key-bar">contact</div>
                    <div className="object-area">
                        <div className="object-table-key">email</div><div className="object-table-value">{patient.contact}</div>
                        <div className="object-table-key">phone</div><div className="object-table-value">{patient.email}</div>
                        <div className="object-table-key">emergency person</div><div className="object-table-value">{patient.emergencyPerson}</div>
                        <div className="object-table-key">emergency contact</div><div className="object-table-value">{patient.emergencyContact}</div>
                    </div>
                </div>
                <div>
                    <div className="key-bar">
                        <span>address</span>
                        <IconButton className="icon-button"><EditIcon className="icon" /></IconButton>
                    </div>
                    <div className="object-area">
                        <div className="object-table-key">country</div><div className="object-table-value">{patient.country}</div>
                        <div className="object-table-key">city</div><div className="object-table-value">{patient.city}</div>
                        <div className="object-table-key">street</div><div className="object-table-value">{patient.street}</div>
                        <div className="object-table-key">postal</div><div className="object-table-value">{patient.postal}</div>
                    </div>
                </div>
            </Content>
            <SlideOut title={editForm ?? ''} open={isEditFormOpened} onClose={() => { setEditForm(null) }}>
                {getEditForm()}
            </SlideOut>
        </Wrapper>
    )
}

export default PatientControl;
