import { useResetRecoilState } from 'recoil';
import {
  arrivalDeliveryAddressState,
  deliveryExtraCostsState,
  deliveryPaymentState,
  deliveryState,
  deliveryTerminalState,
  departureDeliveryAddressState,
} from '../recoil/deliveryRecoil';

export const initDelivery = (isHard = false) => {
  console.log('global initDelivery, isHard', isHard);
  const resetDeliveryState = useResetRecoilState(deliveryState);
  const resetDepartureDeliveryAddress = useResetRecoilState(
    departureDeliveryAddressState,
  );
  const resetDeliveryTerminalState = useResetRecoilState(deliveryTerminalState);
  const resetArrivalDeliveryAddress = useResetRecoilState(
    arrivalDeliveryAddressState,
  );
  const resetDeliveryPaymentState = useResetRecoilState(deliveryPaymentState);
  const resetDeliveryExtraCostsState = useResetRecoilState(
    deliveryExtraCostsState,
  );
  if (isHard) {
    resetDeliveryState();
  }
  resetDepartureDeliveryAddress();
  resetDeliveryTerminalState();
  resetArrivalDeliveryAddress();
  resetDeliveryPaymentState();
  resetDeliveryExtraCostsState();
};
