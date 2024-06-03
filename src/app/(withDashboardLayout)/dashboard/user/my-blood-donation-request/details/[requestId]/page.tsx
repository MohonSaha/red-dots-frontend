type TProps = {
  params: {
    requestId: string;
  };
};

const RequestByMeDetails = ({ params }: TProps) => {
  return (
    <div>
      <h1>{params?.requestId}</h1>
    </div>
  );
};

export default RequestByMeDetails;
