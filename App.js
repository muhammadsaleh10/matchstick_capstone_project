import { useState } from 'react';
import PhoneNumberScreen from './components/PhoneNumberScreen';
import VerificationScreen from './components/VerificationScreen';
import MatchmakerNumberScreen from './components/MatchmakerNumberScreen';
import RegistrationScreen from './components/RegistrationScreen';
import ProfileScreen from './components/ProfileScreen';
import ConfirmationScreen from './components/ConfirmationScreen';

function App() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <PhoneNumberScreen nextStep={nextStep} />;
        case 2:
            return <VerificationScreen nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <MatchmakerNumberScreen nextStep={nextStep} prevStep={prevStep} />;
        case 4:
            return <RegistrationScreen nextStep={nextStep} prevStep={prevStep} />;
        case 5:
            return <ProfileScreen nextStep={nextStep} prevStep={prevStep} />;
        case 6:
            return <ConfirmationScreen prevStep={prevStep} />;
        default:
            return <PhoneNumberScreen nextStep={nextStep} />;
    }
}

export default App;