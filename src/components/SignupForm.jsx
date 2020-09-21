import React, { useState } from 'react';
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
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                  🎉
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Hamarosan elindulunk!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      {/* eslint-disable-next-line max-len */ }
                      Szolgáltatasunk hamarosan elindul, es exkluziv, szemelyre szabott ajanlatokkal fogjuk napjaidat bearanyozni –
                      { ' ' }
                      <b>mert megerdemled.</b>
                    </p>

                    <p className="text-sm leading-5 text-gray-500 mt-4">
                      {/* eslint-disable-next-line max-len */ }
                      Csatlakozz a varolistankoz, es legy az elsok kozott, akik kiprobaljak a DAYBYDAY-t.
                    </p>
                  </div>

                  <div className="mt-4">
                    <form onSubmit={() => submit()}>
                      <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="email"
                        placeholder="neved@email.hu"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  onClick={() => submit()}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Csatlakozom
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={() => close()}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Bezaras
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default SignupForm;
