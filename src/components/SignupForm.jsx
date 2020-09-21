import React, { useEffect, useState } from 'react';
import { Transition } from '@tailwindui/react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function SignupForm({ show, close }) {
  const [email, setEmail] = useState('');

  const submit = () => {
    // e.preventDefault();

    axios
      .post('https://www.getwaitlist.com/waitlist', {
        email,
        api_key: 'GQZDWZ',
        referral_link: 'https://daybyday.hu',
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    if (window.ml_account) {
      window.ml_account('webforms', '2591189', 'm1d6m3', 'show');
    }
  }, [show]);

  return (
    <Transition
      show={show}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveTo="opacity-0"
      leaveFrom="opacity-100"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75" />
          </div>

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div
              className="ml-form-embed"
              data-account="2345642:q9s6p8s8k4"
              data-form="2591189:m1d6m3"
            />
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default SignupForm;
