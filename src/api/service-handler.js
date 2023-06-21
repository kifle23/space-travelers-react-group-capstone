import request from './request';

const getMissions = (url) => request.get(url);

const ServiceHandler = {
  getMissions,
};

export default ServiceHandler;
