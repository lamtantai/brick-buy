// "use client";

// import React, { useEffect } from "react";

// import { AnimatePresence } from "motion/react";

// import { useDispatch, useSelector } from "react-redux";
// import { removeNotification } from "../../lib/features/notification-slice";

// import NotificationItem from "./notification-item";

// const MAX_NOTIFICATIONS = 2;
// const NOTIFICATION_TIMEOUT = 500;

// export default function NotificationModal() {
//   const dispatch = useDispatch();

//   const { notificationList, notificationStatus } = useSelector(
//     (state) => state.notification,
//   );

//   const { type } = useSelector((state) => state.cart);

//   useEffect(() => {
//     const timers = notificationList.map((notification) =>
//       setTimeout(() => {
//         dispatch(removeNotification(notification.id));
//       }, NOTIFICATION_TIMEOUT),
//     );

//     return () => timers.forEach((timer) => clearTimeout(timer));
//   }, [dispatch, notificationList]);

//   const limitedNotifications = notificationList.slice(0, MAX_NOTIFICATIONS);

//   return (
//     type === "add" &&
//     notificationStatus !== "pending" && (
//       <div className="fixed left-0 top-sm z-[999] w-full space-y-xs">
//         <AnimatePresence>
//           {limitedNotifications.map((notification, index) => (
//             <NotificationItem
//               key={notification.id}
//               latestAddedItem={notification.item}
//               status={notificationStatus}
//             />
//           ))}
//         </AnimatePresence>
//       </div>
//     )
//   );
// }
