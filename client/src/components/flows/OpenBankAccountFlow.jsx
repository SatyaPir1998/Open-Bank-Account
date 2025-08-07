import React, { useState } from 'react';
import FillApplicationFormStep from './steps/FillApplicationFormStep';
import SubmitRequiredDocumentsStep from './steps/SubmitRequiredDocumentsStep';
import CheckApplicationFormStep from './steps/CheckApplicationFormStep';
import VerifyDocumentsStep from './steps/VerifyDocumentsStep';
import CreateBankAccountStep from './steps/CreateBankAccountStep';
import NotifyUserStep from './steps/NotifyUserStep';

const OpenBankAccountFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState({});

  const allSteps = [
    {
      id: '1',
      label: 'Fill Application Form',
      type: 'manual',
      component: FillApplicationFormStep
    },
    {
      id: '2',
      label: 'Submit Required Documents',
      type: 'manual',
      component: SubmitRequiredDocumentsStep
    },
    {
      id: '1',
      label: 'Check Application Form',
      type: 'automated',
      component: CheckApplicationFormStep
    },
    {
      id: '2',
      label: 'Verify Documents',
      type: 'automated',
      component: VerifyDocumentsStep
    },
    {
      id: '1',
      label: 'Create Bank Account',
      type: 'automated',
      component: CreateBankAccountStep
    },
    {
      id: '2',
      label: 'Notify User',
      type: 'automated',
      component: NotifyUserStep
    }
  ];

  const handleStepComplete = (data) => {
    setStepData(prev => ({
      ...prev,
      [currentStep]: data
    }));
    
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All steps completed
      console.log('Case completed:', stepData);
      // TODO: Handle case completion
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = allSteps[currentStep]?.component;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Open Bank Account
            </h1>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {allSteps.length}
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / allSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current step */}
        {CurrentStepComponent && (
          <CurrentStepComponent
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        )}
      </div>
    </div>
  );
};

export default OpenBankAccountFlow;