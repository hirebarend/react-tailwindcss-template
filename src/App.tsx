import React from "react";
import "./App.scss";
import classnames from "classnames";
import { useMutation, useQuery } from "react-query";
import { PollService, TokenService } from "./core";

function App() {
  const pollId = "b59mzx6jb41cos8u";

  const token = "foo-bar";

  const useQueryResultPoll = useQuery(
    ["PollService.find", pollId],
    async () => await PollService.find(pollId)
  );

  const useQueryResultToken = useQuery(
    ["TokenService.find", token, useQueryResultPoll.data?.id],
    async () => {
      if (!useQueryResultPoll.data) {
        return null;
      }

      return await TokenService.find(token, useQueryResultPoll.data?.id);
    },
    {
      enabled: useQueryResultPoll.data ? true : false,
    }
  );

  const useMutationResult = useMutation(async (option: string) => {
    if (!useQueryResultPoll.data || !useQueryResultToken.data) {
      return null;
    }

    return await PollService.vote(
      useQueryResultPoll.data,
      useQueryResultToken.data,
      option
    );
  });

  if (!useQueryResultPoll.data) {
    return <></>;
  }

  return (
    <div className="tw-max-w-5xl tw-mx-auto">
      <div className="tw-pt-16 tw-px-4 lg:tw-grid lg:tw-grid-cols-2 lg:tw-pt-32 lg:tw-px-0">
        <div></div>
        <div className="tw-bg-white tw-p-4 tw-rounded-2xl tw-shadow-sm lg:tw-p-8">
          <h1 className="tw-font-medium tw-text-2xl tw-text-gray-900">
            {useQueryResultPoll.data.title}
          </h1>

          <div className="tw-pt-6">
            {useQueryResultPoll.data.options.map((x) => (
              <div
                className={classnames(
                  "tw-cursor-pointer tw-duration-300 tw-font-medium tw-mb-2 tw-px-4 tw-py-2 tw-rounded-full tw-transition hover:tw-bg-indigo-500 hover:tw-text-white",
                  {
                    "tw-bg-indigo-50": !useMutationResult.isLoading,
                  }
                )}
                key={x}
                onClick={() => {
                  if (useMutationResult.isLoading) {
                    return;
                  }

                  useMutationResult.mutateAsync(x);
                }}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
