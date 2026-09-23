import React, {useEffect, useState} from 'react';

export default function SlackSimulation() {
  const [showTyping, setShowTyping] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showReplyTyping, setShowReplyTyping] = useState(false);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setShowTyping(false);
      setShowMessage(true);
      setShowReplyTyping(false);
      setShowReply(true);
      return undefined;
    }

    const messageTimer = window.setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
    }, 1500);

    const replyTypingTimer = window.setTimeout(() => {
      setShowReplyTyping(true);
    }, 3000);

    const replyTimer = window.setTimeout(() => {
      setShowReplyTyping(false);
      setShowReply(true);
    }, 4500);

    return () => {
      window.clearTimeout(messageTimer);
      window.clearTimeout(replyTypingTimer);
      window.clearTimeout(replyTimer);
    };
  }, []);

  return (
    <div className="slackSimulation">
      <div className="slackSimulationHeader">
        <span className="slackSimulationChannel"># operations-intake</span>
        <span className="slackSimulationLabel">💬 Live Triage Simulation</span>
      </div>

      <div className="slackSimulationMessage">
        <div className="slackSimulationAvatar slackSimulationAvatarIncoming" aria-hidden="true">👨‍💻</div>
        <div className="slackSimulationBody">
          <div className="slackSimulationMeta">
            <strong>Alex (Product Manager)</strong>
            <span>9:14 AM</span>
          </div>

          {showTyping && (
            <div className="slackSimulationTyping" aria-label="Alex is typing">
              <span />
              <span />
              <span />
            </div>
          )}

          {showMessage && (
            <p className="slackSimulationText slackSimulationFadeIn">
              Hey Jess, quick question, can we pull a report on why support tickets spiked yesterday?
            </p>
          )}
        </div>
      </div>

      {(showReplyTyping || showReply) && (
        <div className="slackSimulationReply slackSimulationFadeIn">
          <div className="slackSimulationAvatar slackSimulationAvatarReply" aria-hidden="true">JH</div>
          <div className="slackSimulationBody">
            <div className="slackSimulationMeta">
              <strong>Jessica</strong>
              <span>9:16 AM</span>
            </div>
            {showReplyTyping && !showReply && (
              <div className="slackSimulationTyping" aria-label="Jessica is typing">
                <span />
                <span />
                <span />
              </div>
            )}

            {showReply && (
              <>
                <p className="slackSimulationText">Happy to look into it! Quick clarifying questions before I pull numbers:</p>
                <ul>
                  <li>Are we defining “spiked” as total volume or escalation rate?</li>
                  <li>Does this include chatbot self-service deflection, or just human queues?</li>
                  <li>What baseline should we compare yesterday’s volume against: the previous day, the same weekday, or a rolling average?</li>
                </ul>
                <p className="slackSimulationText">Let me know when you get a chance and I'll dive into it!</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
